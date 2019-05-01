

import brew from "./brew";
import gcloud from "./gcloud";
import ruby from "./ruby";
import xcode from "./xcode";

import tamland from "../local/tamland";


const setup = async function(config){

    await tamland(config);

    await xcode();

    await gcloud();
    await gcloud("core");
    await gcloud("beta");
    await gcloud("cloud-firestore-emulator");

    await ruby();

    await brew();
    await brew("graphicsmagick");
    await brew("imagemagick");
    await brew("memcached");

};


export default setup;
