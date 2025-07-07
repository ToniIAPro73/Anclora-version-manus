# Anclora - Tu Ancla para la Productividad

## Descripción

Anclora es una aplicación web de productividad personal que permite a los usuarios organizar su vida en una sola plataforma. La aplicación incluye gestión de tareas, seguimiento de hábitos, objetivos mensuales, presupuesto básico y un diario rápido.

**Eslogan:** "Tu Ancla para la Productividad"

## Características Principales

### 🎯 Dashboards Personalizados
- **Creadores de Contenido**: Dashboard optimizado para creadores
- **Freelancers**: Herramientas específicas para trabajadores independientes
- **Estudiantes**: Funcionalidades adaptadas para estudiantes
- **Side Hustles**: Gestión de proyectos paralelos

### 📋 Módulos Incluidos
1. **Lista de Tareas Diarias**: Gestión de tareas con prioridades
2. **Seguimiento de Hábitos**: Monitoreo del progreso de hábitos
3. **Objetivos del Mes**: Seguimiento de metas con subtareas
4. **Presupuesto Básico**: Control de ingresos y gastos
5. **Diario Rápido**: Registro de reflexiones diarias

## Tecnologías Utilizadas

- **Frontend**: React 18 con Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Base de Datos**: Supabase
- **Despliegue**: Manus Platform

## Configuración de Supabase

La aplicación utiliza variables de entorno para conectarse a Supabase. Crea un archivo `.env` (o configura las variables en tu entorno) con:

```bash
VITE_SUPABASE_URL="https://tu-proyecto.supabase.co"
VITE_SUPABASE_ANON_KEY="tu_anon_key"
```

### Estructura de Base de Datos Esperada

La aplicación espera las siguientes tablas en Supabase:

1. **tasks**
   - id (primary key)
   - title (text)
   - priority (text)
   - done (boolean)
   - audience (text)

2. **habits**
   - id (primary key)
   - name (text)
   - progress (integer)
   - audience (text)

3. **goals**
   - id (primary key)
   - title (text)
   - progress (integer)
   - subtasks (json)
   - audience (text)

4. **budget**
   - id (primary key)
   - income (integer)
   - expenses (json)
   - audience (text)

5. **journal**
   - id (primary key)
   - date (timestamp)
   - text (text)
   - audience (text)

## Instalación y Desarrollo

### Prerrequisitos
- Node.js 20.x o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd anclora
   ```

2. **Instalar dependencias**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configurar variables de entorno**
   - Crea un archivo `.env` con `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

## Funcionalidades Implementadas

### ✅ Completadas
- [x] Página de inicio con diseño atractivo
- [x] Navegación entre diferentes tipos de usuarios
- [x] Dashboards personalizados por audiencia
- [x] Componentes de productividad (tareas, hábitos, objetivos, presupuesto, diario)
- [x] Integración con Supabase
- [x] Datos de demostración como fallback
- [x] Diseño responsive
- [x] Manejo de errores
- [x] Estados de carga
- [x] Navegación fluida entre páginas

### 🔄 Características Adicionales Sugeridas
- [ ] Autenticación de usuarios
- [ ] Formularios para agregar/editar datos
- [ ] Notificaciones y recordatorios
- [ ] Exportación de datos
- [ ] Tema oscuro/claro
- [ ] Gráficos y estadísticas avanzadas
- [ ] Integración con calendarios externos

## Estructura del Proyecto

```
anclora/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx          # Componente principal con routing
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── dist/                # Build de producción
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md           # Documentación
```

## URLs de Acceso

- **Desarrollo**: http://localhost:5173/
- **Producción**: https://tgedkydd.manus.space

## Rutas Disponibles

- `/` - Página de inicio
- `/dashboard/creadores` - Dashboard para creadores de contenido
- `/dashboard/freelancers` - Dashboard para freelancers
- `/dashboard/estudiantes` - Dashboard para estudiantes
- `/dashboard/sidehustle` - Dashboard para side hustles

## Manejo de Datos

La aplicación implementa un sistema robusto de manejo de datos:

1. **Conexión a Supabase**: Intenta conectarse y obtener datos reales
2. **Fallback a datos demo**: Si falla la conexión, muestra datos de demostración
3. **Estados de carga**: Indicadores visuales durante la carga
4. **Manejo de errores**: Mensajes informativos para el usuario

## Personalización

### Cambiar Colores
Los colores principales se pueden modificar en las clases de Tailwind:
- Azul principal: `bg-blue-600`, `text-blue-600`
- Grises: `bg-gray-100`, `text-gray-600`

### Agregar Nuevos Módulos
1. Crear el componente en `src/App.jsx`
2. Agregarlo al grid del Dashboard
3. Configurar la estructura de datos en Supabase

## Soporte y Mantenimiento

### Logs y Debugging
- Los errores se registran en la consola del navegador
- Verificar la conexión a Supabase en las herramientas de desarrollador

### Actualizaciones
- Actualizar dependencias regularmente
- Probar en diferentes navegadores
- Verificar compatibilidad móvil

## Licencia

Este proyecto está desarrollado para uso personal/comercial. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando React, Tailwind CSS y Supabase**

