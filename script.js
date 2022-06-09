(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "class": "Player",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_590AB04B_471B_024E_41D0_DB1826200C7A.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_51C008BD_470F_02C5_41D1_76AE21BA8CA5",
  "this.overlay_50CDE8DD_470D_0245_417F_B7AB1623C549",
  "this.overlay_50C52A61_470D_067D_41B7_A402772208C4",
  "this.overlay_51ABAA5C_470D_064A_41C3_F9CD56004255"
 ],
 "hfovMin": "150%",
 "label": "P_ MB_01",
 "id": "panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.76,
   "yaw": -79.84,
   "panorama": "this.panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 52.37,
   "yaw": -95.46,
   "panorama": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 1283.83,
   "angle": 0,
   "y": 688.94,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58935194_471B_02DA_4178_B46E1DCECA3E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_590AB04B_471B_024E_41D0_DB1826200C7A",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_505771C5_470D_02BA_41C9_3485D5CB7A7D",
  "this.overlay_51DDC91F_470D_03C5_41D0_E3BA898DAAD6"
 ],
 "hfovMin": "150%",
 "label": "P_L_003",
 "id": "panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 57.15,
   "yaw": 138.55,
   "panorama": "this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 674.37,
   "angle": -88.94,
   "y": 1389.7,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_597AC0C1_471B_02BA_41C3_6CB204E30B2C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_50D8D935_471B_03DA_41A7_027D75E3CA4C",
  "this.overlay_5F020CB6_471D_02C7_41D0_A7D4ECDBF112"
 ],
 "hfovMin": "150%",
 "label": "P _ Mbath _ 001",
 "id": "panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.84,
   "yaw": -79.76,
   "panorama": "this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 938.39,
   "angle": 258,
   "y": 469.34,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_t.jpg"
},
{
 "overlays": [
  "this.overlay_5DB08D8E_470D_02C7_410A_0199DE6AAD60",
  "this.overlay_5D5C7696_4735_0EC7_41C8_BB988DB48219",
  "this.overlay_5D41D8E8_4735_024A_419A_77094475EBFA",
  "this.overlay_5D754A6F_4735_0645_41AD_4001857F3313",
  "this.overlay_5D787B7F_4735_0645_41CD_217EF3BECAF1",
  "this.overlay_5D681EBA_4735_3ECE_41B3_ACE965B544B7",
  "this.overlay_5C9B9030_4735_01DB_4180_3A82160C013D",
  "this.overlay_5C86064E_4737_0E47_41A1_52C9D22F7547"
 ],
 "fieldOfViewOverlayOutsideOpacity": 0,
 "id": "map_5E3BE039_470F_01CD_41CB_B32DE8824625",
 "width": 1705,
 "label": "EYAP_V5_20210812",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayRadiusScale": 0.07,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625.png",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1839
   },
   {
    "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_lq.png",
    "width": 246,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 266
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#33FF66",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_t.png",
 "height": 1839
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58A21134_471B_03DA_419F_82AE3B91BE6E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 108.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58E141A9_471B_02CA_41B1_1962657C41E2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 103.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_595A910B_471B_03CE_41AE_3798A36F153C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5916A097_471B_02C6_41B6_F76B1E2CCCA6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58BF714F_471B_0246_41A8_0263D9DDD3B3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_590A904B_471B_024E_41D1_7C42FEEC4626",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_588A5164_471B_027A_41C9_DB36A722A9CE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -152.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_526C1E8F_4715_1EC5_41CD_21BB4D563362",
  "this.overlay_53322EB8_4715_3ECB_419D_C7081A739A02",
  "this.overlay_52CD6C8F_4715_02C4_41CA_2B98ABD8F2E6",
  "this.overlay_53A2193F_471B_03C5_419E_ADA08DA07795",
  "this.overlay_52CFD1D4_471B_025B_419B_C84F4174B54B",
  "this.overlay_525F05D5_471D_025A_41CA_50172464F73A",
  "this.overlay_50E8F94C_4717_024A_41BC_7C83B55A6440",
  "this.overlay_50412FF8_4715_1E4A_41B9_8EB210FFBFB1"
 ],
 "hfovMin": "150%",
 "label": "P_L_000",
 "id": "panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 139.3,
   "yaw": 27.63,
   "panorama": "this.panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 120.46,
   "yaw": 99.99,
   "panorama": "this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -95.46,
   "yaw": 52.37,
   "panorama": "this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -71.49,
   "yaw": -51.13,
   "panorama": "this.panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 370.88,
   "angle": 0,
   "y": 987.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_t.jpg"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_515A08F1_4715_025A_41A3_F89229195133",
  "this.overlay_503987D6_4715_0E46_41A5_18E9BFA5F922",
  "this.overlay_5287074C_4715_0E4B_41BD_E8A4E8C8FA10",
  "this.overlay_51856D8B_4715_02CD_41CC_1E61A113C30B",
  "this.overlay_511B3280_470B_06BB_41C7_B82B16D5B346",
  "this.overlay_50026846_4735_0247_41D0_6E1D92A8B27E"
 ],
 "hfovMin": "150%",
 "label": "P_L_002",
 "id": "panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 138.55,
   "yaw": 57.15,
   "panorama": "this.panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 99.99,
   "yaw": 120.46,
   "panorama": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 85.92,
   "yaw": -76.5,
   "panorama": "this.panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 898.91,
   "angle": 178.4,
   "y": 1073.86,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_597560DB_471B_024E_41C5_AFB2BEF43753",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 128.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_505FC4BD_470F_02C5_41C2_8C06C2EA2E47",
  "this.overlay_5020575A_470F_0E4C_41BB_DFD9BA7A50C7"
 ],
 "hfovMin": "150%",
 "label": "P_B_001",
 "id": "panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.63,
   "yaw": 139.3,
   "panorama": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 521.39,
   "angle": 0,
   "y": 558.17,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_591FC07D_471B_024A_41BE_71FF08372F0C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_51FA2684_470B_0EBB_41C5_BA2993494CD1",
  "this.overlay_50267CCA_470B_024E_41D0_97EBF2536CEA"
 ],
 "hfovMin": "150%",
 "label": "P_L_001",
 "id": "panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -76.5,
   "yaw": 85.92,
   "panorama": "this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 1468.89,
   "angle": -176.2,
   "y": 1113.34,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5957C11F_471B_03C6_41BA_64D8DA10B72F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_596170AC_471B_02CA_41AA_D83CB9583B2E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_594020F1_471B_025A_41C1_3E54CD28943A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -40.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/f/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/f/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/u/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/u/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/r/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/r/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/b/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/b/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/d/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/d/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/l/0/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0/l/1/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_50ED36FD_471D_0E45_41B6_16E44B9EFC10",
  "this.overlay_5F3C2222_471F_01FF_41C3_915D45690057"
 ],
 "hfovMin": "150%",
 "label": "P_ CS_001",
 "id": "panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -51.13,
   "yaw": -71.49,
   "panorama": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_5E3BE039_470F_01CD_41CB_B32DE8824625",
   "x": 198.16,
   "angle": 268.39,
   "y": 701.28,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_t.jpg"
},
{
 "items": [
  "this.PanoramaPlayListItem_590B904C_471B_024A_41BC_0F97E5A3B089",
  "this.PanoramaPlayListItem_590CE04C_471B_024A_41B7_71317AC831E5",
  "this.PanoramaPlayListItem_590D704C_471B_024A_41C4_28E101CE229A",
  "this.PanoramaPlayListItem_590DF04C_471B_024A_41CF_4AA9CE042348",
  "this.PanoramaPlayListItem_590E104D_471B_024A_41C1_AE0D0A2AF0BF",
  "this.PanoramaPlayListItem_590EB04D_471B_024A_41CF_6493AC64A89F",
  "this.PanoramaPlayListItem_590FD04D_471B_024A_41CC_7A327A0CA23E",
  "this.PanoramaPlayListItem_5900605F_471B_0246_41C6_E8F44B2051B4"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_58861179_471B_024A_41B9_5E236C55929C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "class": "Container",
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "class": "Container",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": 0,
 "height": 118,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundOpacity": 0.64
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "right": "79.61%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "40%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "bottom": "0.01%",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E, this.camera_58935194_471B_02DA_4178_B46E1DCECA3E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_0_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ]
   },
   "yaw": -95.46,
   "hfov": 16.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.3
  }
 ],
 "id": "overlay_51C008BD_470F_02C5_41D1_76AE21BA8CA5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.89,
   "image": "this.AnimatedImageResource_50A2D35B_4715_064D_41CE_0093983942DA",
   "pitch": 7.96,
   "distance": 100,
   "hfov": 3.96
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -92.89,
   "hfov": 3.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.96
  }
 ],
 "id": "overlay_50CDE8DD_470D_0245_417F_B7AB1623C549",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.87,
   "image": "this.AnimatedImageResource_50A2835B_4715_064D_41B2_5DEC8D1255A9",
   "pitch": 9.7,
   "distance": 100,
   "hfov": 3.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -84.87,
   "hfov": 3.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.7
  }
 ],
 "id": "overlay_50C52A61_470D_067D_41B7_A402772208C4",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243, this.camera_58861179_471B_024A_41B9_5E236C55929C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_3_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -79.84,
   "hfov": 15.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.61
  }
 ],
 "id": "overlay_51ABAA5C_470D_064A_41C3_F9CD56004255",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08, this.camera_58BF714F_471B_0246_41A8_0263D9DDD3B3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_505771C5_470D_02BA_41C9_3485D5CB7A7D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.86,
   "image": "this.AnimatedImageResource_50A3B35A_4715_064F_41B9_8BB2B52E8EEB",
   "pitch": -21.62,
   "distance": 100,
   "hfov": 16.43
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_1_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 120.86,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.62
  }
 ],
 "id": "overlay_51DDC91F_470D_03C5_41D0_E3BA898DAAD6",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292, this.camera_591FC07D_471B_024A_41BE_71FF08372F0C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0_HS_0_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -79.76,
   "hfov": 30.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.92
  }
 ],
 "id": "overlay_50D8D935_471B_03DA_41A7_027D75E3CA4C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.21,
   "image": "this.AnimatedImageResource_50D421EA_471F_024F_41C4_DDEF345D1F7C",
   "pitch": 11.56,
   "distance": 100,
   "hfov": 7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -80.21,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.56
  }
 ],
 "id": "overlay_5F020CB6_471D_02C7_41D0_A7D4ECDBF112",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 332.36,
  "y": 905.06,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_0.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 332.36,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 905.06
 },
 "useHandCursor": true,
 "id": "overlay_5DB08D8E_470D_02C7_410A_0199DE6AAD60",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 482.88,
  "y": 475.72,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_1.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 482.88,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 475.72
 },
 "useHandCursor": true,
 "id": "overlay_5D5C7696_4735_0EC7_41C8_BB988DB48219",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 159.64,
  "y": 618.83,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_2.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 159.64,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 618.83
 },
 "useHandCursor": true,
 "id": "overlay_5D41D8E8_4735_024A_419A_77094475EBFA",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1430.37,
  "y": 1030.9,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_3.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 1430.37,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1030.9
 },
 "useHandCursor": true,
 "id": "overlay_5D754A6F_4735_0645_41AD_4001857F3313",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 635.86,
  "y": 1307.25,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_4.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 635.86,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1307.25
 },
 "useHandCursor": true,
 "id": "overlay_5D787B7F_4735_0645_41CD_217EF3BECAF1",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 860.4,
  "y": 991.42,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_5.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 860.4,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 991.42
 },
 "useHandCursor": true,
 "id": "overlay_5D681EBA_4735_3ECE_41B3_ACE965B544B7",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1245.32,
  "y": 606.5,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_6.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 1245.32,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 606.5
 },
 "useHandCursor": true,
 "id": "overlay_5C9B9030_4735_01DB_4180_3A82160C013D",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 899.87,
  "y": 386.89,
  "class": "HotspotMapOverlayImage",
  "width": 77.03,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_7.png",
     "width": 77,
     "class": "ImageResourceLevel",
     "height": 164
    }
   ]
  },
  "height": 164.89
 },
 "map": {
  "width": 77.03,
  "x": 899.87,
  "height": 164.89,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_5E3BE039_470F_01CD_41CB_B32DE8824625_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 34
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 386.89
 },
 "useHandCursor": true,
 "id": "overlay_5C86064E_4737_0E47_41A1_52C9D22F7547",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08, this.camera_595A910B_471B_03CE_41AE_3798A36F153C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 99.99,
   "hfov": 41.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.52
  }
 ],
 "id": "overlay_526C1E8F_4715_1EC5_41CD_21BB4D563362",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292, this.camera_5957C11F_471B_03C6_41BA_64D8DA10B72F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_1_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 52.37,
   "hfov": 18.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.97
  }
 ],
 "id": "overlay_53322EB8_4715_3ECB_419D_C7081A739A02",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD, this.camera_594020F1_471B_025A_41C1_3E54CD28943A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_2_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 27.63,
   "hfov": 19.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.57
  }
 ],
 "id": "overlay_52CD6C8F_4715_02C4_41CA_2B98ABD8F2E6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52.56,
   "image": "this.AnimatedImageResource_5D64C0BF_470B_02C6_41CD_37325D01DA0A",
   "pitch": 11.98,
   "distance": 100,
   "hfov": 4.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 52.56,
   "hfov": 4.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.98
  }
 ],
 "id": "overlay_53A2193F_471B_03C5_419E_ADA08DA07795",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.21,
   "image": "this.AnimatedImageResource_5FBE837F_471B_0646_41C4_0F40D334EFE6",
   "pitch": 11.95,
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 26.21,
   "hfov": 4.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.95
  }
 ],
 "id": "overlay_52CFD1D4_471B_025B_419B_C84F4174B54B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.42,
   "image": "this.AnimatedImageResource_5D64B0C0_470B_02BA_41C7_F17615BA6D1C",
   "pitch": -22.51,
   "distance": 100,
   "hfov": 7.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 94.42,
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.51
  }
 ],
 "id": "overlay_525F05D5_471D_025A_41CA_50172464F73A",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35, this.camera_58A21134_471B_03DA_419F_82AE3B91BE6E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_6_1_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -51.13,
   "hfov": 24.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.44
  }
 ],
 "id": "overlay_50E8F94C_4717_024A_41BC_7C83B55A6440",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.08,
   "image": "this.AnimatedImageResource_50A62359_4715_064D_41A9_4073E3BB005B",
   "pitch": 21.28,
   "distance": 100,
   "hfov": 5.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -52.08,
   "hfov": 5.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.28
  }
 ],
 "id": "overlay_50412FF8_4715_1E4A_41B9_8EB210FFBFB1",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "class": "IconButton",
 "maxHeight": 37,
 "paddingBottom": 0,
 "right": 30,
 "propagateClick": true,
 "width": 100,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "bottom": 8,
 "height": 75,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E, this.camera_596170AC_471B_02CA_41AA_D83CB9583B2E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 120.46,
   "hfov": 66.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.38
  }
 ],
 "id": "overlay_515A08F1_4715_025A_41A3_F89229195133",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1, this.camera_5916A097_471B_02C6_41B6_F76B1E2CCCA6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_2_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 57.15,
   "hfov": 67.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.99
  }
 ],
 "id": "overlay_503987D6_4715_0E46_41A5_18E9BFA5F922",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 45.43,
   "image": "this.AnimatedImageResource_50A57359_4715_064D_41A7_2168996744C0",
   "pitch": -17.76,
   "distance": 100,
   "hfov": 13.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 45.43,
   "hfov": 13.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.76
  }
 ],
 "id": "overlay_5287074C_4715_0E4B_41BD_E8A4E8C8FA10",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA, this.camera_597AC0C1_471B_02BA_41C3_6CB204E30B2C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ]
   },
   "yaw": -76.5,
   "hfov": 119.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.13
  }
 ],
 "id": "overlay_51856D8B_4715_02CD_41CC_1E61A113C30B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.62,
   "image": "this.AnimatedImageResource_50A4F359_4715_064D_41C5_740D73E93C84",
   "pitch": -18.97,
   "distance": 100,
   "hfov": 11.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -94.62,
   "hfov": 11.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.97
  }
 ],
 "id": "overlay_511B3280_470B_06BB_41C7_B82B16D5B346",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.95,
   "image": "this.AnimatedImageResource_50A4C35A_4715_064F_41BC_20AF1AA59BF9",
   "pitch": -19.59,
   "distance": 100,
   "hfov": 10.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_6_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 102.95,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.59
  }
 ],
 "id": "overlay_50026846_4735_0247_41D0_6E1D92A8B27E",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E, this.camera_588A5164_471B_027A_41C9_DB36A722A9CE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_505FC4BD_470F_02C5_41C2_8C06C2EA2E47",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 136.87,
   "image": "this.AnimatedImageResource_50A3335A_4715_064F_4178_847207867713",
   "pitch": 17,
   "distance": 100,
   "hfov": 8.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 136.87,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17
  }
 ],
 "id": "overlay_5020575A_470F_0E4C_41BB_DFD9BA7A50C7",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08, this.camera_58E141A9_471B_02CA_41B1_1962657C41E2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ]
   },
   "yaw": 85.92,
   "hfov": 129.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.92
  }
 ],
 "id": "overlay_51FA2684_470B_0EBB_41C5_BA2993494CD1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 106.95,
   "image": "this.AnimatedImageResource_50A4535A_4715_064F_41BD_F23EBD9F13D7",
   "pitch": -22.79,
   "distance": 100,
   "hfov": 16.77
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 106.95,
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.79
  }
 ],
 "id": "overlay_50267CCA_470B_024E_41D0_97EBF2536CEA",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E, this.camera_597560DB_471B_024E_41C5_AFB2BEF43753); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_50ED36FD_471D_0E45_41B6_16E44B9EFC10",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.67,
   "image": "this.AnimatedImageResource_50F593F4_471D_065B_41B1_3CA21E7A6323",
   "pitch": 10.78,
   "distance": 100,
   "hfov": 5.38
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -95.67,
   "hfov": 5.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.78
  }
 ],
 "id": "overlay_5F3C2222_471F_01FF_41C3_915D45690057",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "camera": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_camera",
 "media": "this.panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590B904C_471B_024A_41BC_0F97E5A3B089, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590B904C_471B_024A_41BC_0F97E5A3B089",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_camera",
 "media": "this.panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590CE04C_471B_024A_41B7_71317AC831E5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590CE04C_471B_024A_41B7_71317AC831E5",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_camera",
 "media": "this.panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590D704C_471B_024A_41C4_28E101CE229A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590D704C_471B_024A_41C4_28E101CE229A",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_camera",
 "media": "this.panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590DF04C_471B_024A_41CF_4AA9CE042348, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590DF04C_471B_024A_41CF_4AA9CE042348",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_camera",
 "media": "this.panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590E104D_471B_024A_41C1_AE0D0A2AF0BF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590E104D_471B_024A_41C1_AE0D0A2AF0BF",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_camera",
 "media": "this.panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590EB04D_471B_024A_41CF_6493AC64A89F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590EB04D_471B_024A_41CF_6493AC64A89F",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_camera",
 "media": "this.panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_590FD04D_471B_024A_41CC_7A327A0CA23E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_590FD04D_471B_024A_41CC_7A327A0CA23E",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_camera",
 "media": "this.panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5900605F_471B_0246_41C6_E8F44B2051B4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5900605F_471B_0246_41C6_E8F44B2051B4",
 "class": "PanoramaPlayListItem"
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "class": "Container",
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingRight": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "class": "Container",
 "width": 1199,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "paddingLeft": 30,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "height": 51,
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A2D35B_4715_064D_41CE_0093983942DA",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A2835B_4715_064D_41B2_5DEC8D1255A9",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C8AFE48_46F7_168A_41C3_1D3C79C6A292_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A3B35A_4715_064F_41B9_8BB2B52E8EEB",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C89479B_46F7_158E_41CD_7888AE3F3EE1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50D421EA_471F_024F_41C4_DDEF345D1F7C",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4D1AD98C_46F5_1D8A_41C6_C0FC4853D243_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5D64C0BF_470B_02C6_41CD_37325D01DA0A",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5FBE837F_471B_0646_41C4_0F40D334EFE6",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5D64B0C0_470B_02BA_41C7_F17615BA6D1C",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A62359_4715_064D_41A9_4073E3BB005B",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C882818_46F7_3A8A_41C0_D58B3D0CCE5E_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A57359_4715_064D_41A7_2168996744C0",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A4F359_4715_064D_41C5_740D73E93C84",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A4C35A_4715_064F_41BC_20AF1AA59BF9",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C7492C0_46F7_0FFA_41C3_EB0969CBAA08_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A3335A_4715_064F_4178_847207867713",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C77A2EF_46F7_0F86_41B8_814BF603CFAD_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50A4535A_4715_064F_41BD_F23EBD9F13D7",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C8BBDDC_46F7_358B_41D0_2BB70542E0EA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_50F593F4_471D_065B_41B1_3CA21E7A6323",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4C75593D_46F7_1A8B_41C4_57C995B43E35_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "class": "IconButton",
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 60,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/eyita.app/', '_blank')",
 "height": 58,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } }
 },
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "contentOpaque": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
