/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
// place our admob ad unit id here
var admobid = {};

// var idleTimer = null;
// var idleState = false;
// var idleWait = 5000;
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackButton, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       
        if( /(android)/i.test(navigator.userAgent) ) {
          admobid = { // for Android
            banner: 'ca-app-pub-8720755312345684/2294562251',
            interstitial: 'ca-app-pub-xxxxxxxxxxxxx/oooooooooooo'
          };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
          admobid = { // for iOS
            banner: 'ca-app-pub-xxxxxxxxxxxxx/oooooooooooo',
            interstitial: 'ca-app-pub-xxxxxxxxxxxxx/oooooooooooo'
          };
        } else {
          admobid = { // for Windows Phone
            banner: 'ca-app-pub-xxxxxxxxxxxxx/oooooooooooo',
            interstitial: 'ca-app-pub-xxxxxxxxxxxxx/oooooooooooo'
          };
        }
       
        if ( AdMob ) //{ alert( 'admob plugin not ready' ); return; }
       
        setTimeout(function () {
            // this will create a banner on startup
            AdMob.createBanner( {
              adId: admobid.banner,
              adSize: 'SMART_BANNER',
              position: AdMob.AD_POSITION.BOTTOM_CENTER,
              //isTesting: true, // TODO: remove this line when release
              overlap: false,
              offsetTopBar: false,
              bgColor: 'white'
            } );
        }, 10000);

        /*$$(document).ready(function () {
    
            $$('*').bind('mousemove keydown scroll', function () {
            
                clearTimeout(idleTimer);
                        
                if (idleState == true) { 
                    
                    // Reactivated event
                    //$$("body").append("<p>Welcome Back.</p>");            
                }
                
                idleState = false;
                
                idleTimer = setTimeout(function () { 
                    
                    AdMob.createBanner( {
                      adId: admobid.banner,
                      adSize: 'SMART_BANNER',
                      position: AdMob.AD_POSITION.BOTTOM_CENTER,
                      //isTesting: true, // TODO: remove this line when release
                      overlap: false,
                      offsetTopBar: false,
                      bgColor: 'black'
                    } );
                    
                    // Idle Event
                    //$$("body").append("<p>You've been idle for " + idleWait/1000 + " seconds.</p>");

                    idleState = true; }, idleWait);
            });
            
            $$("body").trigger("mousemove");
        
        });*/
       
        // this will load a full screen ad on startup
        /*AdMob.prepareInterstitial({
          adId: admobid.interstitial,
          isTesting: true, // TODO: remove this line when release
          autoShow: true
        });*/

        app.receivedEvent('deviceready');
    },
    onBackButton: function(e) {
      var page = myApp.getCurrentView().activePage;
      myApp.hidePreloader();
      e.preventDefault();
      if(page.name=="index") {
        navigator.app.clearHistory();
        navigator.app.exitApp();
      } else {
      //if (history.length > 0)
        mainView.router.back();
        Admob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
      }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
