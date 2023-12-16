import {client}  from "./getClient";

import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(client);

function imageUrlFor  (source:string){
    
    imageBuilder.image(source);
} 

export default imageUrlFor;