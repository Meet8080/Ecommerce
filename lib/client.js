import sanityClient from "@sanity/client";
// import { SanityClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


 export const client = sanityClient({
    projectId : "w85vj0r7",
    dataset :"production",
    apiVersion :"2022-11-26",
    useCdn : true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

// to get the image url source from the sanity 

export const urlFor = (source) => builder.image(source);