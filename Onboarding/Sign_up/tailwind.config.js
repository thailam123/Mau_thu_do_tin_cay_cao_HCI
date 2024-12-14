
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'title-title-3-font-family': "Inter-SemiBold, sans-serif",
'body-body-3-font-family': "Inter-Medium, sans-serif",
          },
          fontSize: {
            'title-title-3-font-size': "18px",
'body-body-3-font-size': "14px",
          },
          fontWeight: {
            'title-title-3-font-weight': "600",
'body-body-3-font-weight': "500",
          },
          lineHeight: {
            'title-title-3-line-height': "normal",
'body-body-3-line-height': "18px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            'violet-violet-100': '#7f3dff',
'base-light-light-80': '#fcfcfc',
'base-light-light-60': '#f1f1fa',
'base-dark-dark-50': '#212325',
'base-light-light-20': '#91919f',
'base-light-light-100': '#ffffff',
'colors-dark-base-1': '#161719',
'label-color-light-primary': '#000000',
            
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          