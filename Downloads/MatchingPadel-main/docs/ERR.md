## Modelo entidad-relación
![Modelo ER](https://github.com/Proyecto-Padel-2k/Proyecto/blob/main/docs/ModeloRelacionalActualización.jpg)

## Datos de las tablas

# Esquema de Base de Datos - Sistema de Matching Deportivo

Este documento detalla la estructura optimizada de la base de datos para el sistema de emparejamiento. Todas las entidades y atributos siguen las convenciones de nomenclatura en inglés para mayor compatibilidad técnica.

---

## 1. Resumen de Entidades Relacionales

### **Identidad Central y Reputación**
* **`users`**: Datos principales de la cuenta. Incluye `attendance_rate` (porcentaje de asistencia), una métrica clave para el algoritmo de matching que premia la fiabilidad.
* **`clubs`**: Ubicaciones geográficas. El uso de `latitude` y `longitude` permite al sistema calcular distancias precisas en lugar de depender de zonas genéricas.

### **Inteligencia del Jugador**
* **`player_profiles`**: Datos específicos por deporte. Permite diferenciar entre el `declared_level` (nivel que el usuario dice tener) y el `validated_level` (nivel ajustado por el sistema tras los partidos).
* **`availability_slots`**: Ventanas temporales de disponibilidad del usuario según el día de la semana.

### **Ciclo de Vida del Partido**
* **`matches`**: La entidad del evento. Define la "barrera de entrada" mediante `min_level_required` y `max_level_required`.
* **`match_participants`**: Tabla intermedia. Controla quién es el organizador, quién está confirmado y quién está en lista de espera (`substitute`).
* **`ratings`**: Reseñas entre jugadores que alimentan la puntuación de reputación.

---

## 2. Implementación SQL (DDL)

```sql
-- 1. Usuarios y Autenticación
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    age INT,
    gender VARCHAR(20),
    city VARCHAR(100),
    profile_picture_url TEXT,
    language_code VARCHAR(10) DEFAULT 'es',
    is_verified BOOLEAN DEFAULT false,
    attendance_rate DECIMAL(5,2) DEFAULT 100.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Instalaciones Deportivas (Clubes)
CREATE TABLE clubs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_indoor BOOLEAN DEFAULT false
);

-- 3. Perfiles Específicos por Deporte
CREATE TABLE player_profiles (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    sport_name VARCHAR(50) NOT NULL, 
    declared_level DECIMAL(3,2),
    validated_level DECIMAL(3,2),
    years_experience INT,
    hand_dominance VARCHAR(20),
    preferred_position VARCHAR(50),
    play_style TEXT
);

-- 4. Partidos (Eventos)
CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    club_id INT REFERENCES clubs(id),
    scheduled_at TIMESTAMP NOT NULL,
    min_level_required DECIMAL(3,2),
    max_level_required DECIMAL(3,2),
    match_type VARCHAR(50), 
    format VARCHAR(50),
    entry_fee DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'open',
    organizer_id INT REFERENCES users(id)
);

-- 5. Participantes del Partido (Gestión de Asistencia)
CREATE TABLE match_participants (
    id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    player_role VARCHAR(20), -- 'organizer', 'player', 'substitute'
    confirmation_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'confirmed', 'rejected'
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Preferencias y Disponibilidad
CREATE TABLE user_preferences (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) UNIQUE,
    min_age_preference INT DEFAULT 18,
    max_age_preference INT DEFAULT 99,
    search_radius_km INT DEFAULT 20,
    preferred_format VARCHAR(50)
);

CREATE TABLE availability_slots (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    day_of_week INT, -- 0 (Dom) a 6 (Sáb)
    start_time TIME,
    end_time TIME
);

-- 7. Sistema de Valoraciones (Feedback)
CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(id),
    reviewer_id INT REFERENCES users(id),
    reviewee_id INT REFERENCES users(id),
    score INT CHECK (score BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
