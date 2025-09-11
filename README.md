# Data Runners - Juego de SQL

Bienvenido a **Data Runners**, un juego educativo donde los jugadores deben resolver retos de SQL para avanzar de nivel y derrotar a los jefes.  
Este repositorio contiene tanto el **backend (Flask + SQLAlchemy)** como el **frontend (React)** en un mismo proyecto.

## 📂 Estructura del repositorio

Data-Runners/
├── backend/ # API en Flask (niveles, usuarios, puntuaciones)
├── frontend/ # Aplicación en React (interfaz del juego)
├── README.md

## ⚡ Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Python 3.10+](https://www.python.org/downloads/)  
- [Node.js 18+](https://nodejs.org/) y npm  
- [Git](https://git-scm.com/)  

## 🚀 Instrucciones de instalación

### 1. Clonar el repositorio
git clone https://github.com/CeciG24/Data_Runners.git
cd Data-Runners
2. Levantar el backend (Flask)
cd backend
python -m venv venv
source venv/bin/activate   # En Linux/Mac
venv\Scripts\activate      # En Windows
pip install -r requirements.txt
flask run
El backend quedará en: http://localhost:5000

3. Levantar el frontend (React)
En otra terminal:
cd frontend
npm install
npm run dev
El frontend quedará en: http://localhost:3000

🎮 Cómo jugar
Abre el frontend en tu navegador (http://localhost:3000).

Selecciona un nivel.

Escribe tu consulta SQL en el área de query.

Envía tu respuesta y recibe feedback en tiempo real desde el backend.

📡 Endpoints principales del backend
GET /niveles/<id> → Obtiene datos de un nivel (título, enunciado).

POST /niveles/<id>/resolver → Envía la consulta SQL del usuario y devuelve feedback.

GET /scores → Consulta puntajes.

POST /scores → Registra puntajes de un usuario.

👥 Equipo
Proyecto desarrollado por el equipo 404 Hack not found:
Cecilia Garcia Arellano
Valeria Durana Cuateta
Ian Arce Garcia
Giann Carlo Amaro Pozos
Leonardo Daniel Avalos Ramirez
