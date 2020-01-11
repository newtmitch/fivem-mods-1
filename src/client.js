
RegisterCommand(
  "loc",
  async (source, args) => {
    const coords = GetEntityCoords(GetPlayerPed(-1), false);
    emit("chatMessage", "", [0, 255, 0], coords);
  },
  false
);




RegisterCommand(
  "heli",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player)
    const car = GetHashKey("savage");
    RequestModel(car);
    const vehicle = CreateVehicle(car, c[0] + 2, c[1] + 2, c[2] + 1, false, true, false);
    SetPedIntoVehicle(player, vehicle)
  },
  false
);

RegisterCommand(
  "adder",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player)
    const car = GetHashKey("adder");
    RequestModel(car);
    const vehicle = CreateVehicle(car, c[0] + 2, c[1] + 2, c[2] + 1, false, true, false);
    SetPedIntoVehicle(player, vehicle)
  },
  false
);

RegisterCommand(
  "car",
  async (source, args) => {
    try {
      const playerCoords = Cfx.Game.PlayerPed.Position;
      const car = GetHashKey(args);
      RequestModel(car);
      const c = GetEntityCoords(GetPlayerPed(-1), false);
      const vehicle = CreateVehicle(car, c[0] + 2, c[1] + 2, c[2] + 1, 0.0, true, false);
      Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
    } catch (ex) {
      console.log("shit!");
      console.log(ex.toString());
      // console.log(ex.stack);
    }
  },
  false
);

RegisterCommand(
  "guns",
  async (source, args) => {
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_smg" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_combatmg" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_carbinerifle" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_marksmanrifle" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_autoshotgun" + args), 999, false, false);
    GiveWeaponToPed(
      GetPlayerPed(-1),
      GetHashKey("weapon_assaultshotgun" + args),
      999,
      false,
      false
    );
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_rpg" + args), 999, false, false);
    GiveWeaponToPed(
      GetPlayerPed(-1),
      GetHashKey("weapon_grenadelauncher" + args),
      999,
      false,
      false
    );
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_stickybomb" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_molotov" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_heavypistol" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_revolver" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_machete" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_battleaxe" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_knife" + args), 999, false, false);
    GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("gadget_parachute" + args), 999, false, false);
    SetPedArmour(GetPlayerPed(-1), 999);
  },
  false
);

RegisterCommand(
  "tpstart",
  async (source, args) => {
    //location, -98.659, -1138.752, 0
    SetEntityCoords(GetPlayerPed(-1), -85.547, -1153.953, 25.69, 1, 0, 0, 1);
  },
  false
);

RegisterCommand(
  "tp",
  async (source, args) => {
    try {
      // console.log("source:");
      // console.log(source);
      // console.log("args: " + args);

      const playerList = GetActivePlayers();

      // console.log("players:");
      // console.log(playerList);

      const newCoords = GetEntityCoords(GetPlayerPed(-1))

      let idx;
      for (let p in playerList) {
        const player = GetPlayerPed(p);
        SetEntityCoords(player, newCoords[0], newCoords[1], newCoords[2], true, false, false, true)
      }

      // const playerFromIndex = GetPlayerFromIndex()



      // const coords = GetEntityCoords(GetPlayerPed(-1), false);
      // console.log("old coords:");
      // console.log(coords);

      // const ped = GetPlayerPed(args);

      // console.log("ped:");
      // console.log(ped);

      // const c = GetEntityCoords(GetPlayerPed(args), false);

      // console.log("new coords:");
      // console.log(c);
      // // SetEntityCoords(GetPlayerPed(-1), c[0], c[1], c[2], 1, 0, 0, 1);
      // SetEntityCoords(GetPlayerPed(-1), 400, 400, 400, 1, 0, 0, 1);
    } catch (ex) {
      console.log("SHIT");
      console.log(ex.toString());
      console.log(ex.message);
    }
  },
  false
);

RegisterCommand(
  "name",
  source => {
    emit("chatMessage", "", [0, 255, 0], GetPlayerName(source));
  },
  false
);

// RegisterCommand(
//   "active",
//   () => {
//     const players = GetActivePlayers();
//     console.log(players);

//     for (let i in players) {
//       const player = GetPlayerFromIndex(i);
//       console.log("player:");
//       console.log(player);
//     }
//   },
//   false
// );
