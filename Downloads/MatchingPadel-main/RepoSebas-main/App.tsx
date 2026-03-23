import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.hola}>¡Hola, Francisco!</Text>
        </View>

        <View style={styles.separationLine}></View>

        {/* Header */}
        <View style={styles.cardPrimary}>
          {/* Imagen de fondo */}
          <Image
            source={require("./assets/img/padel.jpeg")}
            style={styles.bgImage}
          />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.75)"]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0.5, y: 0.5 }}
            style={styles.gradient}
          />

          {/* Contenido encima */}
          <View style={styles.overlay}>
            <Text style={styles.title}>JUEGA Y <Text style={styles.highlightText}>GANA</Text></Text>
            <Text style={styles.subtitle}>Encuentra partidos y torneos</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buscar Partido</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Próximo partido */}
        <View style={styles.rowContainer}>
          {/* Próximo Partido */}
          <View style={styles.cardHalf}>
            <Text style={styles.cardHeader}>Próximo Partido</Text>

            <View style={styles.separationLineSubtitle}></View>

            <Text style={styles.club}>Club Las Palmas</Text>
            <Text style={styles.time}>Hoy 19:00</Text>
            <Text style={styles.vs}>vs. Juan y Pedro</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkText}>Ver Detalles</Text>
            </TouchableOpacity>
          </View>

          {/* PROXIMOS PARTIDOS HAY QUE PONERLO MODO PESTAÑAS O FOTO ********CAMBIAR********* */}
          <View style={styles.cardHalf}>
            <Text style={styles.cardHeader}>Proximos Partidos</Text>

            <View style={styles.separationLineSubtitle}></View>

            <Text style={styles.torneo}>Torneo Open 2022</Text>
            <Text style={styles.time}>Sábado 15 Ene</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkText}>Ver Más</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progreso del jugador */}
        <View>
          <Text style={styles.sectionTitle}>Tu Progreso</Text>

          <View style={styles.separationLineSubtitle}></View>
        </View>

        <View style={styles.rowContainer}>
          {/* Nivel Actual */}
          <View style={styles.cardHalf}>
            <Text style={styles.progressHeader}>Nivel Actual</Text>

            <View style={styles.separationLineSubtitle}></View>

            <Text style={styles.progressValue}>Nivel 5</Text>
            <Text style={styles.progressSub}>Avanzado</Text>
          </View>

          {/* Estadisticas */}
          <View style={styles.cardHalf}>
            <Text style={styles.progressHeader}>Estadísticas</Text>

            <View style={styles.separationLineSubtitle}></View>
            <Text style={styles.progressLabel}>Partidos Ganados</Text>
            <Text style={styles.progressMatches}>32</Text>
            <Text style={styles.progressSub}>Win Rate: 68%</Text>
          </View>
        </View>

        {/* Jugadores cerca */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Jugadores Cerca de Ti</Text>

          <View style={styles.separationLineSubtitle}></View>

          <View style={styles.playerRow}>
            <View>
              <Text style={styles.playerName}>Ana López</Text>
              <Text style={styles.playerLevel}>Nivel 4 - Intermedia</Text>
            </View>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteText}>Invitar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.playerRow}>
            <View>
              <Text style={styles.playerName}>Luis Martín</Text>
              <Text style={styles.playerLevel}>Nivel 6 - Avanzado</Text>
            </View>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteText}>Invitar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Navigation (mock) */}
        <View style={styles.bottomNav}>
          <Text style={styles.navItem}>Inicio</Text>
          <Text style={styles.navItem}>Partidos</Text>
          <Text style={styles.navItem}>Torneos</Text>
          <Text style={styles.navItem}>Perfil</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#000000" },

  hola: { fontSize: 26, fontWeight: "bold", color: "#ffff" },

  separationLine: { height: 1, backgroundColor: "#333", marginVertical: 10 },
  separationLineSubtitle: { height: 1, backgroundColor: "#333", marginVertical: 5, marginBottom: 10 },

  highlightText: { color: "#A8E000" },

  cardPrimary: {
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#181920"
  },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  subtitle: { color: "#e0e0e0", marginBottom: 10 },

  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    zIndex: 1,
  },

  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    zIndex: 2,
  },

  button: {
    backgroundColor: "#A8E000",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#000000", fontWeight: "bold" },

  card: {
    backgroundColor: "#181920",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardHeader: { fontSize: 18, fontWeight: "bold", color: "#ffff" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#ffff" },
  club: { fontSize: 16, color: "#ffff" },
  time: { color: "#ffff" },
  vs: { marginTop: 5, fontWeight: "bold", color: "#ffff" },
  linkButton: { marginTop: 10, backgroundColor: "#A8E000", padding: 6, borderRadius: 6, alignSelf: "flex-start" },
  linkText: { color: "#000000", fontWeight: "bold" },

  torneo: { color: "#ffff", fontWeight: "bold" },

  row: { flexDirection: "row", justifyContent: "space-between" },
  progressHeader: { color: "#ffff", fontSize: 18, fontWeight: "bold" },
  progressLabel: { color: "#ffff", fontSize: 14, fontWeight: "bold" },
  progressValue: { fontSize: 18, fontWeight: "bold", color: "#ffff" },
  progressMatches: { fontSize: 20, fontWeight: "bold", color: "#ffff" },
  progressSub: { color: "#A8E000" },

  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  playerName: { fontSize: 16, fontWeight: "bold", color: "#ffff" },
  playerLevel: { color: "#A8E000" },
  inviteButton: {
    backgroundColor: "#A8E000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  inviteText: { color: "#000000", fontWeight: "bold" },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  cardHalf: {
    backgroundColor: "#181920",
    padding: 20,
    borderRadius: 12,
    width: "48%",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 12,
  },
  navItem: { fontWeight: "bold", color: "#1e90ff" },
});
