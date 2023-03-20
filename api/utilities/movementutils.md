---
description: Different Utilities for moving the player
---

# MovementUtils

| Method     | Parameters       | Type    | Description                                                                   |
| ---------- | ---------------- | ------- | ----------------------------------------------------------------------------- |
| isMoving   | None             | Boolean | Returns true if the player is moving                                          |
| shouldMove | None             | Boolean | Returns true if the movement keys are being pressed (Different from isMoving) |
| getSpeed   | None             | Double  | Returns the players current speed                                             |
| strafe     | Optional: Double | Void    | Makes the player strafe at a set speed or the players current move speed      |
| stop       | None             | Void    | Stops the players movement                                                    |
