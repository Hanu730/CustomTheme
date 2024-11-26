//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { loadStyles } from '@microsoft/load-themed-styles';
//import { Dialog } from '@microsoft/sp-dialog';

//import * as strings from 'CustomThemeApplicationCustomizerStrings';

//const LOG_SOURCE: string = 'CustomThemeApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICustomThemeApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomThemeApplicationCustomizer
  extends BaseApplicationCustomizer<ICustomThemeApplicationCustomizerProperties> {

  public onInit(): Promise<void> {

  //   const customStyles: string = `
  //   :root {
  //     --theme-primary-color: #333333;
  //     --theme-secondary-color: #4CAF50;
  //     --background-color: #f0f0f0;
  //     --font-color: #323130;
  //   }

  //   body {
  //     background-color: var(--background-color);
  //     color: var(--font-color);
  //     font-family: "Segoe UI", Arial, sans-serif;
  //   }

  //   a {
  //     color: var(--theme-primary-color);
  //   }

  //   .ms-Button {
  //     background-color: var(--theme-primary-color);
  //     border-color: var(--theme-primary-color);
  //     color: white;
  //   }

  //   .ms-Button:hover {
  //     background-color: var(--theme-secondary-color);
  //   }
  // `;

  this.injectQuickLaunchStyles();

  return Promise.resolve();
  // Inject the custom styles into the page head
  // const styleElement: HTMLStyleElement = document.createElement('style');
  
  // styleElement.type = 'text/css';
  // styleElement.innerHTML = customStyles;
  // document.head.appendChild(styleElement);
    // const style = document.createElement('style');
    // style.innerHTML = `
    //   :root {
    //     --primary-color: #ff6347;
    //     --accent-color: #4CAF50;
    //   }
    //  body {
    //     background-color: #f0f0f0;
    //   }
    // `;
    // document.head.appendChild(style);


    // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });

    // return Promise.resolve();
  }

  private injectQuickLaunchStyles(): void {
    // const customCSS = `
    // /* Style the Quick Launch container */
    // .od-Nav-root {
    //     background-color: #f4f4f4; /* Light gray background */
    //     border-right: 2px solid #0078d4; /* Add a border on the right */
    // }

    // /* Style individual links */
    // .od-Nav-link {
    //     color: #0078d4; /* Custom link color */
    //     font-size: 14px; /* Custom font size */
    //     padding: 8px 12px; /* Custom padding */
    //     transition: background-color 0.3s;
    // }
    
    // /* Hover effect for links */
    // .od-Nav-link:hover {
    //     background-color: #e1e1e1; /* Light gray hover background */
    //     text-decoration: none;
    // }

    // /* Style selected link */
    // .od-Nav-link.is-selected {
    //     background-color: #0078d4; /* Selected background color */
    //     color: white; /* Selected text color */
    //     font-weight: bold;
    // }
    // `;
    // const customCSS = `
    // /* Style the site header container */
    // .sp-site-header {
    //     background-color: #0078d4; /* Custom background color */
    //     color: white; /* Custom text color */
    //     border-bottom: 2px solid #005a9e; /* Add a border at the bottom */
    // }

    // /* Style the header title */
    // .sp-site-header .od-SiteHeader-title {
    //     font-size: 20px; /* Custom font size */
    //     font-weight: bold; /* Bold font weight */
    // }

    // /* Style header icons (e.g., settings, notifications) */
    // .sp-site-header .ms-Button-icon {
    //     color: white; /* Change icon color */
    // }

    // /* Add hover effect for buttons */
    // .sp-site-header .ms-Button:hover {
    //     background-color: #005a9e; /* Hover background color */
    // }
    // `;

    const customCSS = `
    /* Style the horizontal navigation container */
    .ms-HorizontalNav {
        background-color: #f26724; /* #f4f4f4 Light gray background */
        padding: 10px 20px; /* Add some padding */
        //border-bottom: 2px solid #0078d4; /* Add a bottom border */
    }
    // .ms-HorizontalNavItem-linkText{
    // color:white;
    // }
    .ms-HorizontalNavItem-link{
    color:white
    }
   
    /* Style individual navigation items */
    .ms-HorizontalNavItem {
        font-size: 16px; /* Custom font size */
        font-weight: bold; /* Bold text */
        color: #ffffff; /* Link color #0078d4*/
        margin-right: 15px; /* Space between items */
        text-decoration: none; /* Remove underline */
        transition: color 0.3s, background-color 0.3s; /* Add smooth hover effect */
    }

    /* Hover effect for navigation items */
    .ms-HorizontalNavItem:hover {
        background-color: #e1e1e1; /* Light gray background on hover */
        color:white; /* Darker blue text on hover */
     }
   
    /* Style active navigation item */
    .ms-HorizontalNavItem .is-selected {
        // background-color: #0078d4; /* Blue background */
        color: #ffffff; /* White text */
        border-bottom: 2px solid black
       
    }
    `;

    loadStyles(customCSS);
    //loadStyles(customCSS);
}

}
