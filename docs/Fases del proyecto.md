# 🎾 Plataforma de Matching para Jugadores de Pádel

> Matching inteligente para partidos que sí se juegan.

## 💡 Justificación del Proyecto

El pádel es un deporte muy popular en España y Europa. Sin embargo, encontrar rivales o compañeros para jugar partidos es un proceso difícil y frustrante. Los jugadores dependen de grupos de WhatsApp, contactos personales y tablones de clubes para encontrar a alguien con quien jugar.

### El problema

Este proceso tiene dos problemas principales:

- **Partidos desequilibrados**: La diferencia de nivel entre jugadores reduce la calidad del juego y la satisfacción de todos.

- **Alta tasa de cancelaciones**: Sin un sistema de compromiso y reputación, las ausencias de última hora son frecuentes y desmotivan a los jugadores más constantes.

### Contexto de mercado

| Dato | Valor |
|------|-------|
| Jugadores en España (federados y no federados) | +8 millones |
| Crecimiento de clubes | Sostenido en zonas urbanas y periurbanas |
| Radio de búsqueda habitual | Hiperlocal (misma zona/ciudad) |
| Soluciones digitales especializadas actuales | Ninguna con criterios objetivos de nivel y fiabilidad |

### Carencias de las soluciones actuales

Las soluciones actuales tienen algunas carencias:

- ❌ No hay filtrado por nivel
- ❌ Sin historial de fiabilidad ni penalización por cancelaciones
- ❌ No hay coincidencia automática
- ❌ No hay métricas ni datos sobre partidos jugados o satisfacción

---

## 🎯 Objetivos

### Objetivo General

> Desarrollar una plataforma digital de matching para jugadores de pádel amateur que conecte automáticamente a jugadores compatibles en función de su nivel de juego, disponibilidad, ubicación y fiabilidad, con el fin de aumentar la tasa de partidos efectivamente jugados y mejorar la experiencia deportiva de sus usuarios.

### Objetivos Específicos

#### Funcionales
- Implementar un sistema de registro y perfil de jugador con nivel declarado, posición preferida, estilo de juego y disponibilidad horaria.
- Desarrollar un algoritmo de determinista de emparejamiento basado en puntuación ponderada (nivel, reputación, preferencias e historial).
- Habilitar la creación y gestión de solicitudes de partido con fecha, hora, club, nivel requerido y tipo de necesidad.
- Integrar un sistema de valoración post-partido que construye un índice de reputación y confiabilidad por jugador.
- Incorporar un chat básico para la comunicación entre jugadores emparejados.

#### Técnicos
- Diseñar e implementar el modelo de datos relacional en **PostgreSQL**.
- Exponer la lógica de negocio mediante una **API REST** con Node.js + Express y autenticación JWT.
- Desarrollar una interfaz móvil multiplataforma con **React Native (Expo)**.
- Preparar la arquitectura de datos (features y targets) para una futura evolución hacia **Machine Learning**.

#### Validación (Beta)
- ✅ ≥ 60% de partidos creados efectivamente jugados
- ✅ < 20% tasa de cancelaciones
- ✅ ≥ 4/5 valoración media post-partido
- ✅ ≥ 50% de usuarios con 2 o más partidos en las 4-6 semanas de beta

### Objetivos a Largo Plazo (Roadmap)

| Fase | Objetivos |
|------|-----------|
| **Fase 1 — MVP** | Validación del algoritmo con clubes locales, mejora del modelo determinista con feedback real |
| **Fase 2 — Crecimiento** | Ranking interno, reservas de pistas, expansión ciudad a ciudad |
| **Fase 3 — IA** | Ajuste automático de niveles, torneos y ligas, personalización avanzada |

---

## 📦 Alcance del MVP / Beta

### ✅ Incluido

- Registro, autenticación (JWT) y gestión de perfil de jugador
- Declaración de nivel y configuración de disponibilidad horaria
- Creación y búsqueda de solicitudes de partido
- Motor de matching automático v1 (algoritmo determinista por score)
- Chat básico entre jugadores emparejados
- Confirmación de asistencia, registro de cancelaciones y valoración post-partido
- Panel de métricas básico (partidos creados, % jugados, cancelaciones, valoración media)

### ❌ Excluido del MVP

- Pasarela de pagos y modelo de suscripción
- Reservas automáticas de pistas
- Ranking público y torneos
- Notificaciones push
- Diseño visual avanzado
- Modelos de Machine Learning

---

## 📊 KPIs

| Indicador | Descripción | Objetivo |
|-----------|-------------|----------|
| Partidos creados / semana | Indicador de adopción y actividad | — |
| % partidos jugados | Métrica principal de calidad del matching | ≥ 60% |
| Tasa de cancelación | Fiabilidad de jugadores y confianza en la plataforma | < 20% |
| Valoración media post-partido | Satisfacción y equilibrio de nivel percibido | ≥ 4 / 5 |
| Retención mensual | Usuarios activos que repiten el siguiente mes | — |
| Tasa de repetición | Usuarios con 2+ partidos al mes | ≥ 50% |

---

## 🏆 Diferenciadores

### 1. Matching por posición de juego
No solo se considera el nivel general, sino también la posición preferida (drive/revés) y el estilo de juego, produciendo emparejamientos más equilibrados tácticamente.

### 2. Nivel validado real
El sistema distingue entre el nivel **declarado** por el usuario y el nivel **validado** a partir del historial de partidos y valoraciones, evitando el sesgo de autosobreestimación.

### 3. Fiabilidad del jugador como criterio de matching
El índice de reputación penaliza cancelaciones y valora la puntualidad y el comportamiento deportivo.

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend / Mobile | React Native (Expo) |
| Backend | Node.js + Express |
| Base de datos | PostgreSQL |
| Autenticación | JWT |
| Mapas | Google Maps API |
| Hosting (beta) | Railway / Render |

---

