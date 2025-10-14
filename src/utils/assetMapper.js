// Asset mapping utility to convert localhost URLs to local assets
const assetMap = {
  // Map localhost URLs to local asset paths
  "http://localhost:3845/assets/9ae07b9f2b0ce8eb91e0422b181ec268539fb256.svg": "/assets/9ae07b9f2b0ce8eb91e0422b181ec268539fb256.svg",
  "http://localhost:3845/assets/883cd501fc86c09a6ac9236f472c914dc97e72de.svg": "/assets/883cd501fc86c09a6ac9236f472c914dc97e72de.svg",
  "http://localhost:3845/assets/380d7c57c8da998602c27a8540fb92067223abc1.svg": "/assets/380d7c57c8da998602c27a8540fb92067223abc1.svg",
  "http://localhost:3845/assets/387e1fdaba032cec9987ecb3f179369ebc062863.svg": "/assets/387e1fdaba032cec9987ecb3f179369ebc062863.svg",
  "http://localhost:3845/assets/c5897153a63e051430d72b0e62512742a6db262d.svg": "/assets/c5897153a63e051430d72b0e62512742a6db262d.svg",
  "http://localhost:3845/assets/80b75202df0baa408a9d13376ff37162cae3f6a6.svg": "/assets/80b75202df0baa408a9d13376ff37162cae3f6a6.svg",
  "http://localhost:3845/assets/d5f50011d879f7eeb838444199ed6cc8992be7ce.svg": "/assets/d5f50011d879f7eeb838444199ed6cc8992be7ce.svg",
  "http://localhost:3845/assets/de8bf0318d24a35a22cb634ec71e1d3edd3cd21c.svg": "/assets/de8bf0318d24a35a22cb634ec71e1d3edd3cd21c.svg",
  "http://localhost:3845/assets/6d3c0204ac37f038cd091108592cad5b0022f2e9.svg": "/assets/6d3c0204ac37f038cd091108592cad5b0022f2e9.svg",
  "http://localhost:3845/assets/bd7230e7a66d09f8f2922c1dbe464bf845edafdb.svg": "/assets/bd7230e7a66d09f8f2922c1dbe464bf845edafdb.svg",
  "http://localhost:3845/assets/850367b3d5bcc6795460767cc6f8c3748e42d0c6.svg": "/assets/850367b3d5bcc6795460767cc6f8c3748e42d0c6.svg",
  "http://localhost:3845/assets/31bcd2bd8a20f979bbaf0dd99cf7a04a8abd86f3.svg": "/assets/31bcd2bd8a20f979bbaf0dd99cf7a04a8abd86f3.svg",
  "http://localhost:3845/assets/0f0383cf06f4eb1085b119a44e1d85a57f62ffa0.svg": "/assets/0f0383cf06f4eb1085b119a44e1d85a57f62ffa0.svg",
  "http://localhost:3845/assets/57bb129d1b855322faa4ab5bb6aaecf60e37f883.svg": "/assets/57bb129d1b855322faa4ab5bb6aaecf60e37f883.svg",
  "http://localhost:3845/assets/7270a34653955b75ee76c3c2eaf878d9319dad44.svg": "/assets/7270a34653955b75ee76c3c2eaf878d9319dad44.svg",
  "http://localhost:3845/assets/7faafd79c0142feec3c11a31ea79f06a74a7185f.svg": "/assets/7faafd79c0142feec3c11a31ea79f06a74a7185f.svg",
  "http://localhost:3845/assets/3e63957ecd6b5a0c3c6f740e63899c1b59879d29.svg": "/assets/3e63957ecd6b5a0c3c6f740e63899c1b59879d29.svg",
  "http://localhost:3845/assets/0f305d7c690d1ed22808c9571d291cac65c5e293.svg": "/assets/0f305d7c690d1ed22808c9571d291cac65c5e293.svg",
  "http://localhost:3845/assets/ee4ded87b3fda1e73abe5f6ac1d3aade8f3ab7f7.svg": "/assets/ee4ded87b3fda1e73abe5f6ac1d3aade8f3ab7f7.svg",
  "http://localhost:3845/assets/f962f03bdf57af15fc49a33ac23a67dd54369d85.svg": "/assets/f962f03bdf57af15fc49a33ac23a67dd54369d85.svg",
  "http://localhost:3845/assets/1b01df89a94005ccd200e89439481b55b08dffbf.svg": "/assets/1b01df89a94005ccd200e89439481b55b08dffbf.svg",
  "http://localhost:3845/assets/cafb969d4fdf481cdae5f8fdc86f52969cc49fbe.svg": "/assets/cafb969d4fdf481cdae5f8fdc86f52969cc49fbe.svg",
  "http://localhost:3845/assets/18dd999ea0b749301ca03dd6bb239ec6357ca2bf.svg": "/assets/18dd999ea0b749301ca03dd6bb239ec6357ca2bf.svg",
  "http://localhost:3845/assets/ea85197476169c5aa08c936bc8012c0189af8879.svg": "/assets/ea85197476169c5aa08c936bc8012c0189af8879.svg",
  "http://localhost:3845/assets/f7cb79730f932d589adf6e9c72297f19d7509748.svg": "/assets/f7cb79730f932d589adf6e9c72297f19d7509748.svg",
  "http://localhost:3845/assets/9e05da8c71a78213d42b1eda495c5bf8592adf94.svg": "/assets/9e05da8c71a78213d42b1eda495c5bf8592adf94.svg",
  "http://localhost:3845/assets/24bb5ae20925b3678d31a812f0d709e8f8919b7e.svg": "/assets/24bb5ae20925b3678d31a812f0d709e8f8919b7e.svg",
  "http://localhost:3845/assets/3fa9b13ab8ace0e15e059c64cfe847f6ab65db15.svg": "/assets/3fa9b13ab8ace0e15e059c64cfe847f6ab65db15.svg",
  "http://localhost:3845/assets/47a7ba9ca1de371a563e5830e9fefe55220595d8.svg": "/assets/47a7ba9ca1de371a563e5830e9fefe55220595d8.svg",
  "http://localhost:3845/assets/e8fa688c2335a3c2cfe4f63ce0d39f02ff34ee99.svg": "/assets/e8fa688c2335a3c2cfe4f63ce0d39f02ff34ee99.svg",
  "http://localhost:3845/assets/54c7b8211a203137315d2431d93e367da5008886.svg": "/assets/54c7b8211a203137315d2431d93e367da5008886.svg",
  "http://localhost:3845/assets/8f8e005454b9b46963f5efd7a358be9e494c7c42.svg": "/assets/8f8e005454b9b46963f5efd7a358be9e494c7c42.svg",
  "http://localhost:3845/assets/2c08c65ba84d97c660b9cc885af5ca09d53cdea9.svg": "/assets/2c08c65ba84d97c660b9cc885af5ca09d53cdea9.svg",
  "http://localhost:3845/assets/5e861ee5275a438cae8b911658d25d0aed45a930.svg": "/assets/5e861ee5275a438cae8b911658d25d0aed45a930.svg",
  "http://localhost:3845/assets/5f67ee39f0b74a9186b78d97c130191ea3897304.svg": "/assets/5f67ee39f0b74a9186b78d97c130191ea3897304.svg",
  "http://localhost:3845/assets/731e8d55479956f4866381e59df2a791c75953b5.png": "/assets/731e8d55479956f4866381e59df2a791c75953b5.png",
  // Add more mappings as needed
};

export function mapAssetUrl(localhostUrl) {
  return assetMap[localhostUrl] || localhostUrl;
}

export function mapAllAssets(assets) {
  const mappedAssets = {};
  for (const [key, value] of Object.entries(assets)) {
    mappedAssets[key] = mapAssetUrl(value);
  }
  return mappedAssets;
}

