# ⚡ Inicio Rápido - GPI-PlanMaster

## 🎯 Para Ver el Proyecto AHORA

### Opción 1: Script Automático (Recomendado)
```bash
./start.sh
```
**Se abrirá en:** `http://localhost:8000`

---

### Opción 2: Comando Manual
```bash
python3 -m http.server 8000
```
Luego abre: `http://localhost:8000`

---

### Opción 3: VS Code Live Server
1. Clic derecho en `index.html`
2. "Open with Live Server"

---

## 🌐 Para Subir a Internet

### GitHub Pages (GRATIS)

**Paso 1:** Crear repo en GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/GPI-PlanMaster.git
git push -u origin main
```

**Paso 2:** Activar Pages
- Ve a: `Settings > Pages`
- Source: `Deploy from branch`
- Branch: `main` / `(root)`
- **¡Listo!** Tu sitio estará en:
  `https://TU-USUARIO.github.io/GPI-PlanMaster/`

---

### Netlify (SÚPER FÁCIL)

**Opción A: Drag & Drop**
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. **¡Listo!** URL: `https://random-name.netlify.app`

**Opción B: CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

### Vercel (RÁPIDO)
```bash
npm i -g vercel
vercel
```

---

## 📋 Checklist Pre-Deploy

- [ ] ✅ Todos los archivos están en la carpeta
- [ ] ✅ El servidor local funciona
- [ ] ✅ No hay errores en la consola
- [ ] ✅ Se ve bien en móvil y desktop
- [ ] ✅ Los datos se cargan correctamente

---

## 🔧 Actualizar Datos

**Archivo:** `js/cronograma-data.json`

1. Edita el JSON
2. Guarda
3. Recarga la página (F5)
4. ¡Cambios aplicados!

---

## 🆘 Problemas Comunes

### No se cargan los datos
```bash
# Verifica que estás usando un servidor (NO abrir HTML directo)
python3 -m http.server 8000
```

### Error CORS
```bash
# Usa el servidor local, NO abras el archivo directamente
./start.sh
```

### Puerto ocupado
```bash
# Usa otro puerto
python3 -m http.server 8080
```

---

## 📱 URLs del Proyecto

- **Local:** `http://localhost:8000`
- **GitHub Pages:** `https://TU-USUARIO.github.io/GPI-PlanMaster/`
- **Netlify:** `https://TU-SITIO.netlify.app`
- **Vercel:** `https://TU-SITIO.vercel.app`

---

## 📚 Más Información

- [README.md](README.md) - Documentación completa
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía detallada de deploy
- [ESTRUCTURA.md](ESTRUCTURA.md) - Arquitectura del proyecto

---

**¿Todo listo?** ¡Ejecuta `./start.sh` y comienza! 🚀
