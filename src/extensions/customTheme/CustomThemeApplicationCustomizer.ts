//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { loadStyles } from '@microsoft/load-themed-styles';
import { SPHttpClient } from '@microsoft/sp-http';
// import * as ReactDom from 'react-dom';
// import * as React from 'react';
// import { SearchBox } from '@fluentui/react';
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


    private wrapperSelector: string = ".sideActionsWrapper-61";
  //private placeholder: HTMLDivElement | null = null;

  public async onInit(): Promise<void> {
   this.injectSearchBox();
   const isSiteVisitor = await this.isUserInGroup('Websyn-Intranet-UAT Visitors');

    const isSiteOwner = await this.isUserInGroup('Websyn-Intranet-UAT Owners');
    const isSiteMember = await this.isUserInGroup('Websyn-Intranet-UAT Members');
    console.log(isSiteVisitor);
    if(isSiteOwner || isSiteMember){
        this.injectQuickLaunchStylesforMembers()
      
    }else{
        this.injectQuickLaunchStylesforVisitors();
    }
  
  return Promise.resolve();
  
  }

  private injectQuickLaunchStylesforVisitors(): void {

    
   
 const customCSS=`
 div#SuiteNavPlaceholder {
    display: none;
}
div#spCommandBar {
    display: none;
}
.a_b_50a7110f:not(.e_b_50a7110f):not(.o_b_50a7110f) {
    margin-top: 0;
}
 .titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112 {
    display: inline-block;
}
    .ms-HorizontalNavItems {
    float: right;
}

    .mainHeader-108.mainHeader-108.mainHeader-108.mainHeader-108.mainHeader-108 {
    padding-top: 15px;
}
// .fh2jcsl .ms-ButtonShim-flexContainer {
//     display: none;
//     diplay:block;
// }
    .ms-Stack.css-208 > div {
    border-radius: 0 !important;
}
    //  .sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61 {
    //      display: none;
    // }
.announcementWebPart_d7c8a9f1 h3 {
    border-radius: 0 !important;
}
.announcementWebPart_d7c8a9f1 {
    padding: 0;
    border: 0;
}
  
 .quickLinksHeader_5d356418 {
    background: transparent;
    color: #000;
    font-size: 18px; background-color: #f26724;
    border-radius: 0;
}
    .actionsSubcell {
         display: none;
    }
    .ms-Stack > div {
    border-radius: 0 !important;
}
.css-150, .ms-Stack span {
    font-size: 14px;
}
.a_b_50a7110f:not(.e_b_50a7110f):not(.o_b_50a7110f) {
    padding-left: 0;
    margin-bottom:0;
}
.homeWebpart_5d356418 {  
    padding: 0;
    border: 0;
}
.titleSubcell-113.titleSubcell-113.titleSubcell-113.titleSubcell-113.titleSubcell-113 {
    float: left;
}
[dir=ltr] .ms-HorizontalNavItem:first-child {
    margin-left: 29px;
    margin-right: 16px !important;
}
[dir=ltr] .ms-HorizontalNavItem:not(:last-child) {
    margin-right: 1px;
}
.fwiecsv #SiteHeaderTitle a {
    font-size: 24px;

}
.fpnq9et .ms-HorizontalNavItem-linkText.is-selected {
    font-size: 15px;
   color: #333333;
   font-weight:600;
  
}
    .mm_am_9f38462c img {
    object-fit: cover !important;
    width:100%;
}
    @media (min-width: 1024px) {
    .a_c_50a7110f:not(.e_c_50a7110f).t_c_50a7110f {
        padding-right: 0;
    }
    .a_c_50a7110f:not(.e_c_50a7110f).r_c_50a7110f {
        padding-left: 0;
    }
}
@media (min-width: 640px) {
    .a_c_50a7110f:not(.e_c_50a7110f).s_c_50a7110f {
        width: 50%;
        padding-right:0px;
    }
        .g_a_50a7110f .a_c_50a7110f:not(.e_c_50a7110f).s_c_50a7110f:first-child {
    width: 88%;
    padding-right: 0;
}
}
.fv4b208 .ms-HorizontalNavItem-linkText {
   font-size: 15px;
   color: #333333;
   font-weight:600;
}`;
    loadStyles(customCSS);
   
}

private injectQuickLaunchStylesforMembers(): void {


const customCSS=`
div#SuiteNavPlaceholder {
  display: none;
}
.a_b_50a7110f:not(.e_b_50a7110f):not(.o_b_50a7110f) {
  margin-top: 0;
}
.titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112.titleAndNavWrapper-112 {
  display: inline-block;
}
.titleSubcell-113.titleSubcell-113.titleSubcell-113.titleSubcell-113.titleSubcell-113 {
  float: left;
}
[dir=ltr] .ms-HorizontalNavItem:first-child {
  margin-left: 29px;
  margin-right: 16px !important;
}
[dir=ltr] .ms-HorizontalNavItem:not(:last-child) {
  margin-right: 1px;
}
.fwiecsv #SiteHeaderTitle a {
  font-size: 20px;

}
.fpnq9et .ms-HorizontalNavItem-linkText.is-selected {
  font-size: 15px;
   color: #333333;
   font-weight:600;
  
  
}
     .ms-HorizontalNavItems {
    float: right;
}
    .mainHeader-108.mainHeader-108.mainHeader-108.mainHeader-108.mainHeader-108 {
    padding-top: 15px;
}
// .fh2jcsl .ms-ButtonShim-flexContainer {
//     display: none;
//     diplay:block;
// }
    .ms-Stack > div {
    border-radius: 0 !important;
}
.css-150, .ms-Stack span{
    font-size: 14px;
}
.a_b_50a7110f:not(.e_b_50a7110f):not(.o_b_50a7110f) {
    padding-left: 0;
     margin-bottom:0;
}
    .ms-Stack.css-208 > div {
    border-radius: 0 !important;
}
    // .sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61.sideActionsWrapper-61 {
    //      display: none;
    // }
.announcementWebPart_d7c8a9f1 h3 {
    border-radius: 0 !important;
}
.announcementWebPart_d7c8a9f1 {
    padding: 0;
    border: 0;
}
 .quickLinksHeader_5d356418 {
    background: transparent;
    color: #000;
    font-size: 18px; background-color: #f26724;
    border-radius: 0;
}
.homeWebpart_5d356418 {  
    padding: 0;
    border: 0;
}
  .mm_am_9f38462c img {
  object-fit: cover !important;
  width:100%;
}
  @media (min-width: 1024px) {
  .a_c_50a7110f:not(.e_c_50a7110f).t_c_50a7110f {
      padding-right: 0;
  }
  .a_c_50a7110f:not(.e_c_50a7110f).r_c_50a7110f {
      padding-left: 0;
  }
}
@media (min-width: 640px) {
  .a_c_50a7110f:not(.e_c_50a7110f).s_c_50a7110f {
      width: 50%;
      padding-right:0px;
  }
      .g_a_50a7110f .a_c_50a7110f:not(.e_c_50a7110f).s_c_50a7110f:first-child {
  width: 88%;
  padding-right: 0;
}
}
.fv4b208 .ms-HorizontalNavItem-linkText {
  font-size: 15px;
   color: #333333;
   font-weight:600;
}`;
  loadStyles(customCSS);
  //loadStyles(customCSS);
}


private async isUserInGroup(groupName: string): Promise<boolean> {
    var isvisitor= false;
    const groupname=groupName;

    debugger;
        //var result=null;

  var endpoint = `${this.context.pageContext.web.absoluteUrl}/_api/web/sitegroups/getbyname('${groupName}')/users?$filter=Id eq ${this.context.pageContext.legacyPageContext.userId}`;
  if(groupname =="Websyn-Intranet-UAT Visitors"){
   endpoint = `${this.context.pageContext.web.absoluteUrl}/_api/web/sitegroups/getbyname('${groupName}')/users`;
   const response = await this.context.spHttpClient.get(endpoint, SPHttpClient.configurations.v1);
   const result = await response.json();
   result.value.forEach((element:any )=> {
    if(element.Title=="Everyone except external users")
        isvisitor=true;
   });
   return isvisitor;
  }else{
  const response = await this.context.spHttpClient.get(endpoint, SPHttpClient.configurations.v1);
  const result = await response.json();

  return result.value.length > 0;
  } // If user is in the group, ?$filter=Id eq ${this.context.pageContext.legacyPageContext.userId} result.value will have data
}

private injectSearchBox = (): void => {
    const wrapperElement = document.querySelector(this.wrapperSelector) as HTMLElement;
    const ele=document.querySelectorAll("[class^='sideActionsWrapper']");
    console.log(ele);
    
    document.querySelectorAll("[class^='sideActionsWrapper']").forEach(e=>{e.remove()});

    if (wrapperElement) {
      // Remove all children of the wrapper
      while (wrapperElement.firstChild) {
       
      }

      //document.querySelectorAll("[class^='sideActionsWrapper']").forEach(e=>{e.remove()});
      // Get all elements with the class name
      //document.querySelectorAll('#spSiteHeader > div > div.fui-FluentProvider.fui-FluentProvider3.___1c1870d.f1ym3bx4.f1u2r49w.f6sp5hn.f1mo0ibp.fjoy568.ff5ikls.f1qumt79.f1bxpd7w > div > div > div.sideActionsWrapper-61 > div.actionsSubcell-63').forEach(e=>{e.remove()});


      // Create a placeholder div for the search box
    //   this.placeholder = document.createElement("div");
    //   wrapperElement.appendChild(this.placeholder);

    //   // Create the textbox element using TypeScript
    //   const inputElement: HTMLInputElement = document.createElement("input");
    //   inputElement.type = "text";
    //   inputElement.placeholder = "Search...";
    //   inputElement.style.padding = '5px';
    //   inputElement.style.width = '200px';
    //   inputElement.style.borderRadius = '4px';

    //   // Add an event listener for handling input changes
    //   inputElement.addEventListener("input", (e) => {
    //     console.log("Input value:", (e.target as HTMLInputElement).value);
    //   });

    //   // Append the textbox to the placeholder
    //   this.placeholder.appendChild(inputElement);
      // Render a React SearchBox component

    }
  };

// private async validateUser(): Promise<boolean> {
//   const isSiteOwner = await this.isUserInGroup('Websyn-Intranet-UAT Owners');
//   const isSiteMember = await this.isUserInGroup('Websyn-Intranet-UAT Members');
//   const isSiteVisitor = await this.isUserInGroup('Websyn-Intranet-UAT Visitors');

//   return isSiteOwner || isSiteMember||isSiteVisitor;
// }


}
