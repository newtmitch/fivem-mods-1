import * as Cfx from 'fivem-js';
import { Vector3 } from 'fivem-js';

RegisterCommand(
  'heli',
  async (source, args) => {
    const playerCoords = Cfx.Game.PlayerPed.Position;
    const vehicle = await Cfx.World.createVehicle(new Cfx.Model('savage'), playerCoords.add(new Vector3(2, 2, 1)), 4);
    // Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
  },
  false,
);

RegisterCommand(
  'adder',
  async (source, args) => {
    const playerCoords = Cfx.Game.PlayerPed.Position;
    const vehicle = await Cfx.World.createVehicle(new Cfx.Model('adder'), playerCoords.add(new Vector3(2, 2, 1)), 4);
    // Cfx.Game.PlayerPed.setIntoVehicle(vehicle, Cfx.VehicleSeat.Driver);
  },
  false,
);

RegisterCommand(
  'fuckyoumarc',
  async (source, args) => {
	  console.log('source: ' + source);
	  console.log('args: ' + args);
	  console.log('len: ' + args.length);

	  if(args.length > 1 || args.length === 0) {
		console.log('you suck!');
		  return;
	  }

	  console.log('here 1');

	  const player = GetPlayerFromIndex(args);

	  console.log('player: ' + player);

	  const coords = GetEntityCoords(player, true);

	  console.log('coords: ' + coords);

	  SetEntityCoords(GetPlayerPed(-1), coords, 1, 0, 0, 1);
	  
  },
  false,
);

RegisterCommand(
	'carme',
	async(source, args) => {

		try {
		const playerCoords = Cfx.Game.PlayerPed.Position;

		console.log('player: ' + playerCoords);

		console.log('here 1');
		console.log('args: ' + args);

		const car = GetHashKey(args);
		console.log('car:' + car);

		RequestModel(car);

		const c = GetEntityCoords(GetPlayerPed(-1), false);
		console.log('c: ' + c);

		CreateVehicle(car, c[0] + 2, c[1] + 2, c[2] + 1, 0.0, true, false);

		
	//	const vehicle = await Cfx.World.createVehicle(new Cfx.Model(args), playerCoords.add(new Vector3(2, 2, 1)), 4);
		} catch (ex) {
console.log('shit!');
			console.log(ex.toString());
			// console.log(ex.stack);
		}
	}, false
);

RegisterCommand(
	'guns',
	async(source, args) => {
		GiveWeaponToPed(GetPlayerPed(-1), GetHashKey("weapon_" + args), 999, false, false);
	}, false
);

RegisterCommand(
	'tp',
	async (source, args) => {
		try {

			console.log('source:');
			console.log(source);

		const coords = GetEntityCoords(GetPlayerPed(-1), false);
			console.log('old coords:');
			console.log(coords);

			console.log('args: ' + args);

			const ped = GetPlayerPed(args);

			console.log('ped:')
			console.log(ped);

		const c  = GetEntityCoords(GetPlayerPed(args), false);

			console.log('new coords:');
			console.log(c);
		// SetEntityCoords(GetPlayerPed(-1), c[0], c[1], c[2], 1, 0, 0, 1);
		 SetEntityCoords(GetPlayerPed(-1), 400, 400, 400, 1, 0, 0, 1);
		} catch (ex) {
			console.log('SHIT');
			console.log(ex.toString());
			console.log(ex.message);
		}
	}, false
);

RegisterCommand('name', source => {
 emit('chatMessage', "", [0, 255, 0], GetPlayerName(source));
}, false);

RegisterCommand('active', () => {
 const players = GetActivePlayers();
	console.log(players);

	for (let i in players) {
		const player = GetPlayerFromIndex(i);
		console.log('player:');
		console.log(player);
	}
}, false);
