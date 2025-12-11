---
description: Regla para hacer commit automático después de cada instrucción
---

# Regla de Auto-Commit

**IMPORTANTE**: Después de completar CUALQUIER instrucción o tarea del usuario, SIEMPRE debes ejecutar los siguientes pasos:

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

## Formato del mensaje de commit:
- Usar español
- Ser breve pero descriptivo
- Ejemplos:
  - "Actualizar textos de la sección About"
  - "Redirigir botones CTA a sección contacto"
  - "Corregir estilos responsivos del header"
  - "Agregar nueva funcionalidad de traducción"

## Notas:
- Este commit debe hacerse INMEDIATAMENTE después de completar los cambios
- NO esperar a que el usuario lo solicite
- Si hay múltiples cambios en una sola instrucción, agruparlos en un solo commit
- Si el commit falla (por ejemplo, no hay cambios), ignorar el error y continuar
