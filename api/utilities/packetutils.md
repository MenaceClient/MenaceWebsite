---
description: Different utilities for sending packets
---

# PacketUtils

| Method                   | Parameters    | Type | Description                                                                                                          |
| ------------------------ | ------------- | ---- | -------------------------------------------------------------------------------------------------------------------- |
| sendPacket               | CPacket       | Void | Sends a packet to the server, triggers the onSendPacket event as normal                                              |
| sendPacketNoEvent        | CPacket       | Void | Sends a packet to the server, does not trigger the onSendPacket event                                                |
| sendPacketNoEventDelayed | Cpacket, Long | Void | Sends a packet to the server after a delay,  does not trigger the onSendPacket event                                 |
| addToSendQueue           | CPacket       | Void | Adds a packet to Minecraft's send queue packet will be sent in turn, this  triggers the onSendPacket event as normal |
