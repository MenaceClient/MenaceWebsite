---
description: The list of events you can hook with MenScript.
---

# Events

## Event List

* ONENABLE
* ONDISABLE
* EVENTATTACK
* EVENTRENDER2D
* EVENTRENDER3D
* EVENTCHATOUTPUT
* EVENTCOLLIDE
* EVENTDEATH
* EVENTJUMP
* EVENTKEYPRESS
* EVENTMOUSE
* EVENTMOVE
* EVENTPOSTMOTION
* EVENTPREMOTION
* EVENTRECIEVEPACKET
* EVENTSENDPACKET
* EVENTSLOWDOWN
* EVENTSTEP
* EVENTTELEPORT
* EVENTUPDATE
* EVENTWORLDCHANGE

To use these events call them in the hook function.

{% code overflow="wrap" lineNumbers="true" %}
```javascript
module.hook(EventList.EVENTUPDATE, function (event) {
    //Your code goes here
});
```
{% endcode %}

## EventAttack

| Method        | Parameters | Type    | Description                         |
| ------------- | ---------- | ------- | ----------------------------------- |
| getEntity()   | None       | Entity  | Returns the entity being attacked   |
| isPreAttack() | None       | Boolean | Returns if the attack event is pre. |
|               |            |         |                                     |
|               |            |         |                                     |

## EventChatOutput

| Method       | Parameters | Type   | Description                                   |
| ------------ | ---------- | ------ | --------------------------------------------- |
| getMessage() | None       | String | Returns the message being sent by the player. |
| setMessage() | String     | Void   | Changes the message the player sends.         |
|              |            |        |                                               |

## EventCollide

| Method           | Parameters    | Type          | Description                                              |
| ---------------- | ------------- | ------------- | -------------------------------------------------------- |
| getPosX()        | None          | Double        | Return the X position that the event is being called at. |
| setPosX()        | Double        | Void          | Sets the position X that the event is being called at.   |
| getPosY()        | None          | Double        | Return the Y position that the event is being called at. |
| setPosY()        | Double        | Void          | Sets the position Y that the event is being called at.   |
| getPosZ()        | None          | Double        | Return the Z position that the event is being called at. |
| setPosZ()        | Double        | Void          | Sets the position Z that the event is being called at.   |
| getBoundingBox() | None          | AxisAlignedBB | Returns the bounding box the collision takes place with. |
| setBoundingBox() | AxisAlignedBB | Void          | Sets the bounding box the collision takes place with.    |
| getBlock()       | None          | Block         | Returns the block the collision takes place with.        |

## EventDeath

| Method        | Parameters | Type             | Description                                  |
| ------------- | ---------- | ---------------- | -------------------------------------------- |
| getEntity()   | None       | EntityLivingBase | Returns the entity that died.                |
| getAttacker() | None       | EntityPlayer     | Returns the player that attacked the entity. |

## EventJump

| Method             | Parameters | Type  | Description                            |
| ------------------ | ---------- | ----- | -------------------------------------- |
| getUpwardsMotion() | None       | Float | Returns the the jump's upwards motion. |
| setUpwardsMotion() | Float      | Void  | Sets the the jump's upwards motion.    |

## EventKeyPress

| Method   | Parameters | Type    | Description                        |
| -------- | ---------- | ------- | ---------------------------------- |
| getKey() | None       | Integer | Returns the key that gets pressed. |

## EventMouse

| Method      | Parameters | Type    | Description                                |
| ----------- | ---------- | ------- | ------------------------------------------ |
| getButton() | None       | Integer | Returns the mouse button that was pressed. |

## EventMove

| Method | Parameters | Type   | Description                    |
| ------ | ---------- | ------ | ------------------------------ |
| getX() | None       | Double | Returns the players position X |
| setX() | Double     | Void   | Sets the players position X    |
| getY() | None       | Double | Returns the players position Y |
| setY() | Double     | Void   | Sets the players position Y    |
| getZ() | None       | Double | Returns the players position Z |
| setZ() | Double     | Void   | Sets the players position Z    |

## EventPreMotion

Anything changed in EventPreMotion happens **sliently** you will not be able to see the effects client side.

| Method        | Parameters | Type    | Description                            |
| ------------- | ---------- | ------- | -------------------------------------- |
| getX()        | None       | Double  | Returns the players position X         |
| setX()        | Double     | Void    | Sets the players position X            |
| getY()        | None       | Double  | Returns the players position Y         |
| setY()        | Double     | Void    | Sets the players position Y            |
| getZ()        | None       | Double  | Returns the players position Z         |
| setZ()        | Double     | Void    | Sets the players position Z            |
| getYaw()      | None       | Float   | Returns the players yaw.               |
| setYaw()      | Float      | Void    | Sets the players yaw                   |
| getPitch()    | None       | Float   | Returns the players pitch.             |
| setPitch()    | Float      | Void    | Sets the players pitch                 |
| isOnGround()  | None       | Boolean | Returns is the player is on the ground |
| setOnGround() | Boolean    | Void    | Sets if the player is on ground.       |

## EventRecievePacket

| Method      | Parameters | Type   | Description                            |
| ----------- | ---------- | ------ | -------------------------------------- |
| getPacket() | None       | Packet | Returns the packet sent by the server. |

## EventSendPacket

| Method      | Parameters | Type   | Description                                  |
| ----------- | ---------- | ------ | -------------------------------------------- |
| getPacket() | None       | Packet | Returns the packet being sent to the server. |

## EventSlowdown

| Method                 | Parameters | Type  | Description                                       |
| ---------------------- | ---------- | ----- | ------------------------------------------------- |
| getStrafeMultiplier()  | None       | Float | Returns the strafe multiplier while interacting.  |
| getStrafeMultiplier()  | Float      | Void  | Sets the strafe multiplier while interacting.     |
| getForwardMultiplier() | None       | Float | Returns the forward multiplier while interacting. |
| setForwardMultiplier() | Float      | Void  | Sets the forward multiplier while interacting.    |

## EventStep

| Method          | Parameters | Type      | Description                               |
| --------------- | ---------- | --------- | ----------------------------------------- |
| getStepHeight() | None       | Float     | Returns the players current step height.  |
| setStepHeight() | Float      | Void      | Sets the players step height.             |
| getState()      | None       | StepState | Returns whether the event is Pre or Post. |

## EventTeleport

| Method        | Parameters | Type                   | Description                           |
| ------------- | ---------- | ---------------------- | ------------------------------------- |
| getX()        | None       | Double                 | Returns the players position X        |
| setX()        | Double     | Void                   | Sets the players position X           |
| getY()        | None       | Double                 | Returns the players position Y        |
| setY()        | Double     | Void                   | Sets the players position Y           |
| getZ()        | None       | Double                 | Returns the players position Z        |
| setZ()        | Double     | Void                   | Sets the players position Z           |
| getYaw()      | None       | Float                  | Returns the players yaw.              |
| setYaw()      | Float      | Void                   | Sets the players yaw                  |
| getPitch()    | None       | Float                  | Returns the players pitch.            |
| setPitch()    | Float      | Void                   | Sets the players pitch                |
| getResponse() | None       | C04PacketPlayerPosLook | Returns the response to the teleport. |

## Cancelling events

Most events can be cancelled.

{% code overflow="wrap" lineNumbers="true" %}
```javascript
module.hook(EventList.EVENTJUMP, function (event) {
    //Cancel the event with event.cancel();
    event.cancel();
});
```
{% endcode %}
