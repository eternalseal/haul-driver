(this["webpackJsonphaul-drive"]=this["webpackJsonphaul-drive"]||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/react-logo-transparent.f7d45c01.svg"},121:function(e,t,a){e.exports=a(185)},126:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(33),n=a.n(s),o=a(29),u=(a(126),a(127),a(24)),D=a(118),c=a(6),d={path:"/"},l={path:"/work-day"},M=a(75),y=a(74),m=a(30),h=a(187),p=a(111),v=a(189),f=a(192),T=a(10),g=a.n(T),S=function(e){var t={};return e.map((function(e){var a=g()(e.startTime).startOf("week").format("MMM-DD"),r=g()(e.startTime).endOf("week").format("MMM-DD"),i="".concat(a,":").concat(r);t[i]=t[i]?t[i]:{days:[],hours:0,pay:0},e.startTime=g()(e.startTime).format("DD MMM YYYY"),e.endTime=g()(e.endTime).format("DD MMM YYYY");var s=function(e){var t=g.a.duration(e.dutyStatusDurations.onDutyDurationMs),a=Math.floor(t.asHours()),r=Math.floor(t.asMinutes())-60*a,i=g.a.duration(e.dutyStatusDurations.onDutyDurationMs).asHours();return{format:g()().hour(a).minute(r).format("HH:mm"),hours:i}}(e),n=s.format,o=s.hours;e.hours=o,e.formattedHours=n,e.pay=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=0,r=g.a.duration(e.dutyStatusDurations.onDutyDurationMs).asHours(),i=r+t;if(i<=40)a=22*r;else if(t<=40&&i>40){var s=40-t;a=22*s,a+=33*(r-s)}else i>40&&(a=33*r);return{pay:a,hours:r}}(e,t[i].hours).pay,t[i].hours+=e.hours,t[i].pay+=e.pay,t[i].days.push(e)})),t}([{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-02T13:05:00.000Z",endTime:"2021-02-03T20:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.880Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-03T13:05:00.000Z",endTime:"2021-02-04T18:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.875Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-04T13:05:00.000Z",endTime:"2021-02-05T18:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.870Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-05T13:05:00.000Z",endTime:"2021-02-06T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.866Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-06T13:05:00.000Z",endTime:"2021-02-07T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.861Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-07T13:05:00.000Z",endTime:"2021-02-08T16:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.857Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-08T13:05:00.000Z",endTime:"2021-02-09T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.852Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-09T13:05:00.000Z",endTime:"2021-02-10T20:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.847Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-10T13:05:00.000Z",endTime:"2021-02-11T17:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.843Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-11T13:05:00.000Z",endTime:"2021-02-12T15:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.838Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-12T13:05:00.000Z",endTime:"2021-02-13T17:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.833Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-13T13:05:00.000Z",endTime:"2021-02-14T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.828Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-14T13:05:00.000Z",endTime:"2021-02-15T16:55:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1,certifiedAtTime:"2021-02-19T00:37:35.823Z"},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-15T13:05:00.000Z",endTime:"2021-02-16T17:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-16T23:26:03.946Z"},distanceTraveled:{driveDistanceMeters:13063},dutyStatusDurations:{activeDurationMs:288e5,onDutyDurationMs:26751899,driveDurationMs:2048101,offDutyDurationMs:576e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:288e5,onDutyDurationMs:26751899,driveDurationMs:2048101,offDutyDurationMs:576e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-16T13:05:00.000Z",endTime:"2021-02-17T21:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-16T23:25:59.001Z"},distanceTraveled:{driveDistanceMeters:10038},dutyStatusDurations:{activeDurationMs:288e5,onDutyDurationMs:27211996,driveDurationMs:1588004,offDutyDurationMs:576e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:288e5,onDutyDurationMs:27211996,driveDurationMs:1588004,offDutyDurationMs:576e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-17T13:05:00.000Z",endTime:"2021-02-18T21:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-19T00:36:59.381Z"},distanceTraveled:{driveDistanceMeters:88950},dutyStatusDurations:{activeDurationMs:28622008,onDutyDurationMs:20986313,driveDurationMs:7635695,offDutyDurationMs:57777992,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:28622008,onDutyDurationMs:20986313,driveDurationMs:7635695,offDutyDurationMs:57777992,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-18T13:05:00.000Z",endTime:"2021-02-19T21:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-19T00:35:52.247Z"},distanceTraveled:{driveDistanceMeters:16881},dutyStatusDurations:{activeDurationMs:28767998,onDutyDurationMs:26122124,driveDurationMs:2645874,offDutyDurationMs:57632002,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:28767998,onDutyDurationMs:26122124,driveDurationMs:2645874,offDutyDurationMs:57632002,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-19T13:05:00.000Z",endTime:"2021-02-20T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-20T13:05:00.000Z",endTime:"2021-02-21T15:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-21T13:05:00.000Z",endTime:"2021-02-22T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-22T13:05:00.000Z",endTime:"2021-02-23T16:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-25T19:37:05.256Z"},distanceTraveled:{driveDistanceMeters:19090},dutyStatusDurations:{activeDurationMs:306e5,onDutyDurationMs:27698131,driveDurationMs:2901869,offDutyDurationMs:558e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:306e5,onDutyDurationMs:27698131,driveDurationMs:2901869,offDutyDurationMs:558e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-23T13:05:00.000Z",endTime:"2021-02-24T21:59:01.000Z",logMetaData:{shippingDocs:"",vehicles:[{id:"212014918167897",name:"15372",externalIds:{"samsara.serial":"GHGUKRET9K","samsara.vin":"3AKJGEBG4FDGN2350"}},{id:"212014918175183",name:"15372",externalIds:{"samsara.serial":"GYDDHVTE5V","samsara.vin":"3AKJGEBG2FDGN2346"}}],isCertified:!1,certifiedAtTime:"2021-02-25T19:36:56.094Z"},distanceTraveled:{driveDistanceMeters:111007},dutyStatusDurations:{activeDurationMs:306e5,onDutyDurationMs:22075929,driveDurationMs:8524071,offDutyDurationMs:558e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:306e5,onDutyDurationMs:22075929,driveDurationMs:8524071,offDutyDurationMs:558e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-24T13:05:00.000Z",endTime:"2021-02-25T21:55:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-25T13:05:00.000Z",endTime:"2021-02-26T22:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-26T13:05:00.000Z",endTime:"2021-02-27T20:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-27T13:05:00.000Z",endTime:"2021-02-28T22:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-02-28T13:05:00.000Z",endTime:"2021-03-01T15:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-03-01T13:05:00.000Z",endTime:"2021-03-02T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-03-02T13:05:00.000Z",endTime:"2021-03-03T22:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-03-03T13:05:00.000Z",endTime:"2021-03-04T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-03-04T13:05:00.000Z",endTime:"2021-03-05T20:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}},{driver:{timezone:"America/Los_Angeles",eldSettings:{rulesets:[{cycle:"TX 70 hour / 7 day",jurisdiction:"TX",restart:"24-hour Restart",shift:"Texas Intrastate"},{break:"Property (off-duty/sleeper)",cycle:"USA 70 hour / 8 day",restart:"34-hour Restart",shift:"US Interstate Property"}]},id:"abc1234",name:"John Smith"},startTime:"2021-03-05T13:05:00.000Z",endTime:"2021-03-06T21:59:01.000Z",logMetaData:{shippingDocs:"",isCertified:!1},distanceTraveled:{driveDistanceMeters:0},dutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0},pendingDutyStatusDurations:{activeDurationMs:0,onDutyDurationMs:0,driveDurationMs:0,offDutyDurationMs:864e5,sleeperBerthDurationMs:0,yardMoveDurationMs:0,personalConveyanceDurationMs:0,waitingTimeDurationMs:0}}]),b=a(48),A=a(195),C=function(e){var t,a=e.icon,r=e.iconColor,s=e.category,n=e.title,o=e.period,u=e.percentage;return"undefined"!==typeof u&&(t=u<50?"text-danger":u<80?"text-warning":"text-success"),i.a.createElement(A.a,{border:"light",className:"widget shadow-sm"},i.a.createElement(A.a.Body,null,i.a.createElement(h.a,{className:"d-block d-xl-flex align-items-center"},i.a.createElement(p.a,{xl:5,className:"text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"},i.a.createElement("div",{className:"icon icon-shape icon-md icon-".concat(r," rounded me-4 me-sm-0")},i.a.createElement(b.a,{icon:a}))),i.a.createElement(p.a,{xs:12,xl:7,className:"px-xl-0"},i.a.createElement("div",{className:"d-none d-sm-block"},i.a.createElement("h5",null,s),i.a.createElement("h3",{className:"".concat(t," mb-1")},n)),i.a.createElement("small",null,o)))))},E=a(188),w=function(e){var t=e.data,a=function(e){var t=e.index,a=e.startTime,r=e.endTime,s=e.formattedHours,n=e.pay;return i.a.createElement("tr",null,i.a.createElement("td",null,t+1),i.a.createElement("td",null,i.a.createElement("span",{className:"fw-normal"},a)),i.a.createElement("td",null,i.a.createElement("span",{className:"fw-normal"},r)),i.a.createElement("td",null,i.a.createElement("span",{className:"fw-normal text-".concat("primary")},s)),i.a.createElement("td",null,i.a.createElement("span",{className:"fw-normal text-".concat("primary")},"$",parseFloat(n).toFixed(2))))};return i.a.createElement(A.a,{border:"light",className:"table-wrapper table-responsive shadow-sm"},i.a.createElement(A.a.Body,{className:"pt-0"},i.a.createElement(E.a,{hover:!0,className:"user-table align-items-center"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"border-bottom"},"#"),i.a.createElement("th",{className:"border-bottom"},"Start Time"),i.a.createElement("th",{className:"border-bottom"},"End Time"),i.a.createElement("th",{className:"border-bottom"},"Hours Worked"),i.a.createElement("th",{className:"border-bottom"},"Gross Pay"))),i.a.createElement("tbody",null,t.map((function(e,t){return i.a.createElement(a,Object.assign({key:"logs-".concat(t)},e,{index:t}))}))))))},x={id:[g()().startOf("week").format("MMM-DD"),g()().endOf("week").format("MMM-DD")].join(";"),period:"".concat(g()().subtract(7,"days").format("MMM D")," - ").concat(g()().format("MMM D")),message:" reach minimum of ".concat(80,"% from ").concat(70," hrs/week"),pay:0,hours:0,percentage:0},Z=function(){var e=Object(r.useState)(Object.keys(S)),t=Object(u.a)(e,1)[0],a=Object(r.useState)(x),s=Object(u.a)(a,2),n=s[0],o=s[1],D=[];t.map((function(e){return D=[].concat(Object(y.a)(D),Object(y.a)(S[e].days))}));var c=Object(r.useState)(D),d=Object(u.a)(c,2),l=d[0],T=d[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"},i.a.createElement("div",{className:"d-block mb-4 mb-md-0"},i.a.createElement("h4",null,"Driver Work Day Log"),i.a.createElement("p",{className:"mb-0"},'Daily log for the driver "John Smith"'))),i.a.createElement(h.a,{className:"justify-content-md-left mb-4"},i.a.createElement(p.a,{xs:12,sm:6,xl:4,className:"mb-1"},i.a.createElement(C,{category:"Weekly Summary",title:"".concat(parseFloat(n.hours).toFixed(2)," Hours"),period:n.period,message:n.message,icon:m.d,iconColor:"shape-secondary"})),i.a.createElement(p.a,{xs:12,sm:6,xl:4,className:"mb-1"},i.a.createElement(C,{category:"Weekly Gross Pay",title:"$"+parseFloat(n.pay).toFixed(2),period:n.period,icon:m.a,iconColor:"shape-secondary"})),i.a.createElement(p.a,{xs:12,sm:6,xl:4,className:"mb-1"},i.a.createElement(C,{category:"Weekly Hours Percentage",title:parseFloat(n.percentage).toFixed(2)+"%",percentage:n.percentage,period:n.period,icon:m.b,iconColor:"shape-secondary"}))),i.a.createElement("div",{className:"table-settings mb-4"},i.a.createElement(h.a,{className:"justify-content-between align-items-center"},i.a.createElement(p.a,{xs:8,md:6,lg:3,xl:4},i.a.createElement(v.a,null,i.a.createElement(v.a.Text,null,"Week"),i.a.createElement(f.a.Select,{onChange:function(e){var t=e.target.value;if(""===t)return o(x),T(D);var a=S[t],r=function(e){var t={},a=Math.floor(e.hours/70*100);return t.percentage=a,a<80&&(t.message=x.message),t}(a),i=t.replace(/-/g," ").replace(":"," - "),s={id:t,period:i,pay:a.pay,hours:a.hours};T(a.days),o(Object(M.a)(Object(M.a)({},s),r))},defaultValue:"0"},i.a.createElement("option",{value:""},"All"),t.map((function(e){return i.a.createElement("option",{value:e,key:e},e)}))))))),i.a.createElement(w,{data:l}))},B=a(119),I=a(194),P=a(193),R=function(){var e=Object(c.f)(),t=e.pathname,a=Object(r.useState)(!1),s=Object(u.a)(a,2),n=s[0],D=s[1],d=n?"show":"",M=function(e){var a=e.title,r=e.link,s=e.external,n=e.target,u=e.icon,c=r===t?"active":"",d=s?{href:r}:{as:o.b,to:r};return i.a.createElement(P.a.Item,{className:c,onClick:function(){return D(!1)}},i.a.createElement(P.a.Link,Object.assign({},d,{target:n,className:""}),i.a.createElement("span",null,u?i.a.createElement("span",{className:"sidebar-icon"},i.a.createElement(b.a,{icon:u})," "):null,i.a.createElement("span",{className:"sidebar-text"},a))))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,{timeout:300,in:n,classNames:"sidebar-transition"},i.a.createElement(B.a,{className:"collapse ".concat(d," sidebar d-md-block bg-primary text-white")},i.a.createElement("div",{className:"sidebar-inner px-4 pt-3"},i.a.createElement(P.a,{className:"flex-column pt-3 pt-md-0"},i.a.createElement(M,{title:"Driver Work Day",link:l.path,icon:m.c}))))))},U=a(191),X=function(e){return i.a.createElement(U.a,{variant:"dark",expanded:!0,className:"ps-0 pe-2 pb-0"})},j=a(190),k=a(117),N=a.n(k),J=function(e){var t=e.show;return i.a.createElement("div",{className:"preloader bg-soft flex-column justify-content-center align-items-center ".concat(t?"":"show")},i.a.createElement(j.a,{className:"loader-element animate__animated animate__jackInTheBox",src:N.a,height:40}))},_=function(e){var t=e.component,a=Object(D.a)(e,["component"]),s=Object(r.useState)(!1),n=Object(u.a)(s,2),o=n[0],d=n[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return d(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),i.a.createElement(c.a,Object.assign({},a,{render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{show:!o}),i.a.createElement(R,null),i.a.createElement("main",{className:"content"},i.a.createElement(X,null),i.a.createElement(t,e)))}}))},L=function(){return i.a.createElement(c.c,null,i.a.createElement(_,{exact:!0,path:d.path,component:Z}),i.a.createElement(_,{exact:!0,path:l.path,component:Z}))},z=function(){var e=Object(c.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null};n.a.render(i.a.createElement(o.a,null,i.a.createElement(z,null),i.a.createElement(L,null)),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.36830204.chunk.js.map