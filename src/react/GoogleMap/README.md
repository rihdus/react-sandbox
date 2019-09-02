---
title: Google map popups using React Portals.
published: false
description: Rendering pins and popups on google maps taught me how to use react portals.
tags: reactjs, "react-portal", "react context"
---


```jsx
<Map>
   <Marker {...}>
      <InfoWindow {...} >
         { /* Any react component */ }
      </InfoWindow>
   </Marker>
</Map>
```