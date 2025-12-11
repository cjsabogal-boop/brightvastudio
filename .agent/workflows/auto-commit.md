---
description: Regla para hacer commit automático después de cada instrucción
---

# Regla de Auto-Commit y Push a GitHub

**IMPORTANTE**: Después de completar CUALQUIER instrucción o tarea del usuario, SIEMPRE debes ejecutar los siguientes pasos para sincronizar con el repositorio remoto (GitHub/cPanel):

## Pasos obligatorios después de cada cambio:

// turbo-all

1. Agregar todos los cambios al staging:
```bash
git add -A
```

2. Crear un commit con un mensaje descriptivo en español que resuma los cambios realizados:
```bash
git commit -m "descripción breve de los cambios"
```

3. **SIEMPRE** subir los cambios al repositorio remoto:
```bash
git push origin main
```

## Formato del mensaje de commit:
- Usar español
- Ser breve pero descriptivo
- Ejemplos:
  - "Actualizar textos de la sección About"
  - "Redirigir botones CTA a sección contacto"
  - "Corregir estilos responsivos del header"
  - "Agregar nueva funcionalidad de traducción"

## Notas:
- Estos pasos deben hacerse INMEDIATAMENTE después de completar los cambios
- NO esperar a que el usuario lo solicite
- Si hay múltiples cambios en una sola instrucción, agruparlos en un solo commit
- Si el commit o push falla, informar al usuario
- El push es OBLIGATORIO para que cPanel pueda ver los cambios
