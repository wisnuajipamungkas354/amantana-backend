import Admin from "./admin.model";
import Agronomist from "./agronomist.model";
import Farmer from "./farmer.model";
import FarmerPlant from "./farmerPlant.model";
import Plant from "./plant.model";
import PlantTreatment from "./plantTreatment.model";
import User from "./user.model";

User.hasMany(Admin);
Admin.belongsTo(User);

User.hasMany(Agronomist);
Agronomist.belongsTo(User);

User.hasMany(Farmer);
Farmer.belongsTo(User);

Farmer.hasMany(FarmerPlant);
Plant.hasMany(FarmerPlant);
PlantTreatment.hasOne(FarmerPlant);
FarmerPlant.belongsTo(Farmer);
FarmerPlant.belongsTo(Plant);
FarmerPlant.belongsTo(PlantTreatment);

async function generatePlants() {
  const plants = [
    Plant.create({
      name: "Selada Air",
      species: "Lactuca sativa",
      latitude: -6.3456,
      longitude: 107.3771
    }),
    Plant.create({
      name: "Tomat Cherry",
      species: "Solanum lycopersicum var. cerasiforme",
      latitude: -6.3460,
      longitude: 107.3780
    }),
    Plant.create({
      name: "Kangkung Air",
      species: "Ipomoea aquatica",
      latitude: -6.3470,
      longitude: 107.3765
    }),
    Plant.create({
      name: "Pak Choi",
      species: "Brassica rapa subsp. chinensis",
      latitude: -6.3485,
      longitude: 107.3790
    }),
    Plant.create({
      name: "Bayam Hijau",
      species: "Amaranthus tricolor",
      latitude: -6.3490,
      longitude: 107.3758
    })
  ];

  console.log(await Promise.all(plants.map((val) => val)));
}

generatePlants();

export { Admin, User, Agronomist, Farmer };