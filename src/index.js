import * as Cfx from 'fivem-js';
import { Vector3 } from 'fivem-js';

RegisterCommand(
  'adder',
  async (source, args) => {
    const playerCoords = Cfx.Game.PlayerPed.Position;
    // const vehicle = await Cfx.World.createVehicle(new Cfx.Model('adder'), playerCoords.add(new Vector3(2, 2, 1)), 4);
    const vehicle = await Cfx.World.createVehicle(new Cfx.Model('savage'), playerCoords.add(new Vector3(2, 2, 1)), 4);
    // Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
  },
  false,
);

