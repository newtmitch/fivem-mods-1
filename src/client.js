RegisterCommand(
  "loc",
  async (source, args) => {
    const coords = GetEntityCoords(GetPlayerPed(-1), false);
    emit("chatMessage", "", [0, 255, 0], coords);
  },
  false
);

RegisterCommand(
  "moto",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player);
    const car = GetHashKey("vindicator");
    RequestModel(car);
    const vehicle = CreateVehicle(
      car,
      c[0] + 2,
      c[1] + 2,
      c[2] + 1,
      false,
      true,
      false
    );
    SetPedIntoVehicle(player, vehicle, -1);
  },
  false
);

RegisterCommand(
  "jet",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player);
    const car = GetHashKey("lazer");
    RequestModel(car);
    const vehicle = CreateVehicle(
      car,
      c[0] + 2,
      c[1] + 2,
      c[2] + 1,
      false,
      true,
      false
    );
    SetPedIntoVehicle(player, vehicle, -1);
  },
  false
);

RegisterCommand(
  "heli",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player);
    const car = GetHashKey("savage");
    RequestModel(car);
    const vehicle = CreateVehicle(
      car,
      c[0] + 2,
      c[1] + 2,
      c[2] + 1,
      false,
      true,
      false
    );
    SetPedIntoVehicle(player, vehicle, -1);
  },
  false
);

RegisterCommand(
  "sports",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player);
    const car = GetHashKey("fmj");
    RequestModel(car);
    const vehicle = CreateVehicle(
      car,
      c[0] + 2,
      c[1] + 2,
      c[2] + 1,
      false,
      true,
      false
    );
    SetPedIntoVehicle(player, vehicle, -1);
  },
  false
);

RegisterCommand(
  "car",
  async (source, args) => {
    const player = GetPlayerPed(-1);
    const c = GetEntityCoords(player);
    const car = GetHashKey(args);
    RequestModel(car);
    const vehicle = CreateVehicle(
      car,
      c[0] + 2,
      c[1] + 2,
      c[2] + 1,
      false,
      true,
      false
    );
    SetPedIntoVehicle(player, vehicle, -1);
    SetVehicleWheelsCanBreak(vehicle, false);
  },
  false
);

RegisterCommand(
  "guns",
  async (source, args) => {
    gearUp(GetPlayerPed(-1));
  },
  false
);

RegisterCommand(
  "stars",
  async (source, args) => {
    console.log("STAR TIME");
    try {
      //  SetPlayerWantedLevel(GetPlayerPed(-1), 0, false);
      // SetPlayerWantedLevelNow(GetPlayerPed(-1));
      ClearPlayerWantedLevel(PlayerId());
      SetPlayerWantedLevelNow(PlayerId(), false);
    } catch (ex) {
      console.log("SHIT");
      console.log(ex);
    }
  },
  false
);

RegisterCommand(
  "tpstart",
  async (source, args) => {
    tpStartingPoint(GetPlayerPed(-1));
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

      const newCoords = GetEntityCoords(GetPlayerPed(-1));

      let idx;
      for (let p in playerList) {
        const player = GetPlayerPed(p);
        SetEntityCoords(
          player,
          newCoords[0],
          newCoords[1],
          newCoords[2],
          true,
          false,
          false,
          true
        );
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

RegisterCommand(
  "resetall",
  () => {
    // GetActivePlayers doesn't work, so we do this
    const players = [];
    for (i = 0; i < 10; i++) {
      const ped = GetPlayerPed(i);
      // rsm: temp debug
      if (ped) {
        // rsm: temp debug:
        // console.log(`player: ${i}`);
        // console.log(ped);

        players.push(ped);
      }
    }

    // rsm: temp debug
    console.log(`players:`);
    console.log(players);

    for (const ped of players) {
      // rsm: temp debug
      // console.log(`messing with player:`);
      // console.log(ped);

      tpStartingPoint(ped);
      gearUp(ped);
      removeStars(ped);
    }
  },
  false
);

RegisterCommand(
  "reset",
  () => {
    const ped = GetPlayerPed(-1);
    tpStartingPoint(ped);
    gearUp(ped);
    removeStars(ped);
  },
  false
);

RegisterCommand(
  "fixcar",
  () => {
    const vehicle = GetVehiclePedIsIn(GetPlayerPed(-1), false);
    if (vehicle) {
      SetVehicleUndriveable(vehicle, false);
      SetVehicleFixed(vehicle);
      healthBodyLast = 1000.0;
      healthEngineLast = 1000.0;
      healthPetrolTankLast = 1000.0;
      SetVehicleEngineOn(vehicle, true, false);
    }
  },
  false
);

//
// REUSABLE
//

function tpStartingPoint(ped) {
  if (!ped) return;
  SetEntityCoords(ped, -85.547, -1153.953, 25.69, 1, 0, 0, 1);
}

function gearUp(ped) {
  GiveWeaponToPed(ped, GetHashKey("weapon_smg"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_hominglauncher"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_heavysniper"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_sniperrifle"), 999, false, false);

  GiveWeaponToPed(ped, GetHashKey("weapon_combatmg"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_carbinerifle"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_marksmanrifle"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_autoshotgun"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_assaultshotgun"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_rpg"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_grenadelauncher"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_stickybomb"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_molotov"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_heavypistol"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_revolver"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_machete"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_battleaxe"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("weapon_knife"), 999, false, false);
  GiveWeaponToPed(ped, GetHashKey("gadget_parachute"), 999, false, false);
  SetPedArmour(ped, 999);
  SetEntityHealth(ped, 200);
}

function removeStars(ped) {
  console.log("STAR TIME");
  try {
    //  SetPlayerWantedLevel(GetPlayerPed(-1), 0, false);
    // SetPlayerWantedLevelNow(GetPlayerPed(-1));
    ClearPlayerWantedLevel(ped);
    SetPlayerWantedLevelNow(ped, false);
  } catch (ex) {
    console.log("SHIT");
    console.log(ex);
  }
}
