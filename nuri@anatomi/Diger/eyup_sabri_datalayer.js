function checkCouponAndPushToDataLayer() {
  if (window.dataLayer && Array.isArray(window.dataLayer)) {

    for (var i = 0; i < dataLayer.length; i++) {
      var event = dataLayer[i];

      if (event.event === "purchase-UA4") {
    
        for (var j = 0; j < event.ecommerce.items.length; j++) {
          var item = event.ecommerce.items[j];

          var hasCoupon = item.coupon;

          if (hasCoupon) {
            window.dataLayer.push({
              event: "anatomi_purchase",
              newParameter: "newValue",
              ...purchaseEvent,
            });
            console.log("yeni datalayer eklendi");
          } else {
            console.log("Kupon parametresi bulunamadı");
          }
        }
      }
    }

    const purchaseEvent = window.dataLayer.find((item) => {
      return item && item.event === "purchase";
    });

  } else {
    console.error("dataLayer bulunamadı");
  }
}

checkCouponAndPushToDataLayer();





function checkCouponAndPushToDataLayer() {
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      
      const purchaseEvent = window.dataLayer.find((item) => {
        return item && item.event === "purchase";
      });
  
      if (!purchaseEvent) {
        console.error("Purchase event bulunamadı");
        return;
      }
  
      for (var i = 0; i < dataLayer.length; i++) {
        var event = dataLayer[i];
  
        if (event.event === "purchase-UA4") {
      
          for (var j = 0; j < event.ecommerce.items.length; j++) {
            var item = event.ecommerce.items[j];
  
            var hasCoupon = item.coupon;
  
            if (hasCoupon) {
              window.dataLayer.push({
                event: "anatomi_purchase",
                newParameter: "newValue",
                ...purchaseEvent,
              });
              console.log("yeni datalayer eklendi");
              return; 
            } else {
              console.log("Kupon parametresi bulunamadı");
            }
          }
        }
      }
  
    } else {
      console.error("dataLayer bulunamadı");
    }
  }
  
  checkCouponAndPushToDataLayer();
  





setTimeout(() => {
  
    function checkCouponAndPushToDataLayer() {
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
          
          const purchaseEvent = window.dataLayer.find((item) => {
            return item && item.event === "purchase-UA4";
          });
      
          if (!purchaseEvent) {
            console.error("Purchase event bulunamadı");
            return;
          }
      
          for (var i = 0; i < dataLayer.length; i++) {
            var event = dataLayer[i];
      
            if (event.event === "purchase-UA4") {
          
              for (var j = 0; j < event.ecommerce.items.length; j++) {
                var item = event.ecommerce.items[j];
      
                var hasCoupon = item.coupon;
      
                if (hasCoupon) {
                
                  var newDataLayerEvent = {
                    event: "anatomi_purchase",
                    newParameter: "newValue",
                    ecommerce: event.ecommerce
                  };
      
                
                  window.dataLayer.push(newDataLayerEvent);
                  console.log("Yeni dataLayer eklendi:", newDataLayerEvent);
                  return; 
                } else {
                  console.log("Kupon parametresi bulunamadı");
                }
              }
            }
          }
      
        } else {
          console.error("dataLayer bulunamadı");
        }
      }
      
      checkCouponAndPushToDataLayer();
}, 2000)
  



