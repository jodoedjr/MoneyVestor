import axios from "axios";

const API = {
    //setting up dummy API to build virtual market
    getUser: function () {
        const d = new Date("2020-11-08")
        const dummyUser = {
            name: 'Logan Walker',
            portfolio: [
                {
                    stockId: 'IBM',
                    shares: 5,
                    initDate: d,
                    initPrice: 129.40,
                    currPrice: 114.44
                },
                {
                    stockId: 'AAPL',
                    shares: 5,
                    initDate: d,
                    initPrice: 117.40,
                    currPrice: 118.97
                },
                {
                    stockId: 'GOOG',
                    shares: 5,
                    initDate: d,
                    initPrice: 1777.44,
                    currPrice: 1777.44
                }
            ],
            funds: 1000,
            position: 1
        }

        return dummyUser;
    },

    getStockData: function () {
        //in the future, you should be able to input an id for specific data
        //for now we have dummy data for IBM until the backend is linked up
        const dummyData = {
            "Meta Data": {
                "1. Information": "Intraday (5min) open, high, low, close prices and volume",
                "2. Symbol": "IBM",
                "3. Last Refreshed": "2020-11-06 20:00:00",
                "4. Interval": "5min",
                "5. Output Size": "Full size",
                "6. Time Zone": "US/Eastern"
            },
            "Time Series (5min)": {
                "2020-11-06 20:00:00": {
                    "1. open": "114.4400",
                    "2. high": "114.4400",
                    "3. low": "114.4400",
                    "4. close": "114.4400",
                    "5. volume": "457"
                },
                "2020-11-06 19:50:00": {
                    "1. open": "114.4000",
                    "2. high": "114.4000",
                    "3. low": "114.3300",
                    "4. close": "114.3300",
                    "5. volume": "648"
                },
                "2020-11-06 19:45:00": {
                    "1. open": "114.4000",
                    "2. high": "114.4000",
                    "3. low": "114.4000",
                    "4. close": "114.4000",
                    "5. volume": "110"
                },
                "2020-11-06 19:40:00": {
                    "1. open": "114.4500",
                    "2. high": "114.4500",
                    "3. low": "114.4500",
                    "4. close": "114.4500",
                    "5. volume": "178"
                },
                "2020-11-06 19:35:00": {
                    "1. open": "114.4500",
                    "2. high": "114.4500",
                    "3. low": "114.4500",
                    "4. close": "114.4500",
                    "5. volume": "300"
                },
                "2020-11-06 19:25:00": {
                    "1. open": "114.4000",
                    "2. high": "114.4000",
                    "3. low": "114.4000",
                    "4. close": "114.4000",
                    "5. volume": "1000"
                },
                "2020-11-06 19:15:00": {
                    "1. open": "114.4500",
                    "2. high": "114.4500",
                    "3. low": "114.4500",
                    "4. close": "114.4500",
                    "5. volume": "131"
                },
                "2020-11-06 18:55:00": {
                    "1. open": "114.3900",
                    "2. high": "114.4700",
                    "3. low": "114.3900",
                    "4. close": "114.4700",
                    "5. volume": "400"
                },
                "2020-11-06 18:50:00": {
                    "1. open": "114.3500",
                    "2. high": "114.3500",
                    "3. low": "114.3000",
                    "4. close": "114.3000",
                    "5. volume": "200"
                },
                "2020-11-06 18:35:00": {
                    "1. open": "114.3400",
                    "2. high": "114.3400",
                    "3. low": "114.3400",
                    "4. close": "114.3400",
                    "5. volume": "407"
                },
                "2020-11-06 18:25:00": {
                    "1. open": "114.3500",
                    "2. high": "114.3500",
                    "3. low": "114.3500",
                    "4. close": "114.3500",
                    "5. volume": "476"
                },
                "2020-11-06 18:20:00": {
                    "1. open": "114.3200",
                    "2. high": "114.3200",
                    "3. low": "114.3000",
                    "4. close": "114.3200",
                    "5. volume": "1520"
                },
                "2020-11-06 18:15:00": {
                    "1. open": "114.3000",
                    "2. high": "114.3000",
                    "3. low": "114.3000",
                    "4. close": "114.3000",
                    "5. volume": "250"
                },
                "2020-11-06 17:55:00": {
                    "1. open": "114.3000",
                    "2. high": "114.3000",
                    "3. low": "114.3000",
                    "4. close": "114.3000",
                    "5. volume": "108"
                },
                "2020-11-06 17:40:00": {
                    "1. open": "114.1600",
                    "2. high": "114.1600",
                    "3. low": "114.1600",
                    "4. close": "114.1600",
                    "5. volume": "127"
                },
                "2020-11-06 17:35:00": {
                    "1. open": "114.3000",
                    "2. high": "114.3000",
                    "3. low": "114.3000",
                    "4. close": "114.3000",
                    "5. volume": "320"
                },
                "2020-11-06 17:25:00": {
                    "1. open": "114.2700",
                    "2. high": "114.2700",
                    "3. low": "114.2000",
                    "4. close": "114.2000",
                    "5. volume": "1500"
                },
                "2020-11-06 17:20:00": {
                    "1. open": "114.2000",
                    "2. high": "114.2000",
                    "3. low": "114.2000",
                    "4. close": "114.2000",
                    "5. volume": "500"
                },
                "2020-11-06 17:00:00": {
                    "1. open": "114.0900",
                    "2. high": "114.1500",
                    "3. low": "114.0500",
                    "4. close": "114.1500",
                    "5. volume": "1614"
                },
                "2020-11-06 16:55:00": {
                    "1. open": "114.1000",
                    "2. high": "114.1002",
                    "3. low": "114.1000",
                    "4. close": "114.1000",
                    "5. volume": "451"
                },
                "2020-11-06 16:50:00": {
                    "1. open": "114.2000",
                    "2. high": "114.2000",
                    "3. low": "114.1000",
                    "4. close": "114.1002",
                    "5. volume": "1731"
                },
                "2020-11-06 16:40:00": {
                    "1. open": "114.1000",
                    "2. high": "114.1000",
                    "3. low": "114.1000",
                    "4. close": "114.1000",
                    "5. volume": "205"
                },
                "2020-11-06 16:25:00": {
                    "1. open": "114.2599",
                    "2. high": "114.2599",
                    "3. low": "114.0514",
                    "4. close": "114.0514",
                    "5. volume": "1319"
                },
                "2020-11-06 16:20:00": {
                    "1. open": "114.0400",
                    "2. high": "114.2600",
                    "3. low": "114.0400",
                    "4. close": "114.2600",
                    "5. volume": "4899"
                },
                "2020-11-06 16:15:00": {
                    "1. open": "114.2500",
                    "2. high": "114.2500",
                    "3. low": "114.2500",
                    "4. close": "114.2500",
                    "5. volume": "385"
                },
                "2020-11-06 16:10:00": {
                    "1. open": "114.3100",
                    "2. high": "114.3100",
                    "3. low": "114.2000",
                    "4. close": "114.2000",
                    "5. volume": "411"
                },
                "2020-11-06 16:05:00": {
                    "1. open": "114.0400",
                    "2. high": "114.0400",
                    "3. low": "114.0002",
                    "4. close": "114.0002",
                    "5. volume": "246849"
                },
                "2020-11-06 16:00:00": {
                    "1. open": "114.3500",
                    "2. high": "114.3900",
                    "3. low": "113.9100",
                    "4. close": "114.0400",
                    "5. volume": "279452"
                },
                "2020-11-06 15:55:00": {
                    "1. open": "114.5500",
                    "2. high": "114.6600",
                    "3. low": "114.3400",
                    "4. close": "114.3650",
                    "5. volume": "107640"
                },
                "2020-11-06 15:50:00": {
                    "1. open": "114.3529",
                    "2. high": "114.6300",
                    "3. low": "114.3500",
                    "4. close": "114.6000",
                    "5. volume": "94922"
                },
                "2020-11-06 15:45:00": {
                    "1. open": "114.2300",
                    "2. high": "114.3600",
                    "3. low": "114.1800",
                    "4. close": "114.3500",
                    "5. volume": "51163"
                },
                "2020-11-06 15:40:00": {
                    "1. open": "114.1400",
                    "2. high": "114.2350",
                    "3. low": "114.1300",
                    "4. close": "114.2200",
                    "5. volume": "56763"
                },
                "2020-11-06 15:35:00": {
                    "1. open": "114.0700",
                    "2. high": "114.2400",
                    "3. low": "114.0700",
                    "4. close": "114.1500",
                    "5. volume": "39798"
                },
                "2020-11-06 15:30:00": {
                    "1. open": "113.9900",
                    "2. high": "114.1088",
                    "3. low": "113.9600",
                    "4. close": "114.0825",
                    "5. volume": "41183"
                },
                "2020-11-06 15:25:00": {
                    "1. open": "113.9300",
                    "2. high": "114.0200",
                    "3. low": "113.9000",
                    "4. close": "113.9985",
                    "5. volume": "41092"
                },
                "2020-11-06 15:20:00": {
                    "1. open": "113.9660",
                    "2. high": "114.0100",
                    "3. low": "113.8950",
                    "4. close": "113.9100",
                    "5. volume": "39370"
                },
                "2020-11-06 15:15:00": {
                    "1. open": "113.7500",
                    "2. high": "113.9800",
                    "3. low": "113.7100",
                    "4. close": "113.9500",
                    "5. volume": "58306"
                },
                "2020-11-06 15:10:00": {
                    "1. open": "113.7200",
                    "2. high": "113.7700",
                    "3. low": "113.6500",
                    "4. close": "113.7600",
                    "5. volume": "37987"
                },
                "2020-11-06 15:05:00": {
                    "1. open": "113.8200",
                    "2. high": "113.8385",
                    "3. low": "113.6329",
                    "4. close": "113.7100",
                    "5. volume": "53770"
                },
                "2020-11-06 15:00:00": {
                    "1. open": "113.8409",
                    "2. high": "113.8900",
                    "3. low": "113.7800",
                    "4. close": "113.8500",
                    "5. volume": "60492"
                },
                "2020-11-06 14:55:00": {
                    "1. open": "113.8806",
                    "2. high": "113.9296",
                    "3. low": "113.8300",
                    "4. close": "113.8600",
                    "5. volume": "40659"
                },
                "2020-11-06 14:50:00": {
                    "1. open": "113.8700",
                    "2. high": "113.9550",
                    "3. low": "113.8500",
                    "4. close": "113.8800",
                    "5. volume": "24387"
                },
                "2020-11-06 14:45:00": {
                    "1. open": "113.9600",
                    "2. high": "114.0000",
                    "3. low": "113.8700",
                    "4. close": "113.8700",
                    "5. volume": "39082"
                },
                "2020-11-06 14:40:00": {
                    "1. open": "114.1900",
                    "2. high": "114.1900",
                    "3. low": "113.9500",
                    "4. close": "113.9800",
                    "5. volume": "59547"
                },
                "2020-11-06 14:35:00": {
                    "1. open": "114.2200",
                    "2. high": "114.2500",
                    "3. low": "114.0900",
                    "4. close": "114.1750",
                    "5. volume": "62472"
                },
                "2020-11-06 14:30:00": {
                    "1. open": "114.0700",
                    "2. high": "114.2545",
                    "3. low": "114.0100",
                    "4. close": "114.2400",
                    "5. volume": "47427"
                },
                "2020-11-06 14:25:00": {
                    "1. open": "114.0500",
                    "2. high": "114.1000",
                    "3. low": "114.0400",
                    "4. close": "114.0862",
                    "5. volume": "37672"
                },
                "2020-11-06 14:20:00": {
                    "1. open": "114.0545",
                    "2. high": "114.0900",
                    "3. low": "113.9800",
                    "4. close": "114.0700",
                    "5. volume": "36397"
                },
                "2020-11-06 14:15:00": {
                    "1. open": "114.0750",
                    "2. high": "114.0950",
                    "3. low": "114.0100",
                    "4. close": "114.0541",
                    "5. volume": "36012"
                },
                "2020-11-06 14:10:00": {
                    "1. open": "114.0200",
                    "2. high": "114.0900",
                    "3. low": "114.0000",
                    "4. close": "114.0750",
                    "5. volume": "20731"
                },
                "2020-11-06 14:05:00": {
                    "1. open": "114.0900",
                    "2. high": "114.1705",
                    "3. low": "113.9600",
                    "4. close": "114.0200",
                    "5. volume": "36473"
                },
                "2020-11-06 14:00:00": {
                    "1. open": "114.0200",
                    "2. high": "114.0900",
                    "3. low": "113.9600",
                    "4. close": "114.0850",
                    "5. volume": "27401"
                },
                "2020-11-06 13:55:00": {
                    "1. open": "114.0650",
                    "2. high": "114.0900",
                    "3. low": "113.9922",
                    "4. close": "114.0100",
                    "5. volume": "28596"
                },
                "2020-11-06 13:50:00": {
                    "1. open": "113.9700",
                    "2. high": "114.0862",
                    "3. low": "113.9601",
                    "4. close": "114.0600",
                    "5. volume": "22080"
                },
                "2020-11-06 13:45:00": {
                    "1. open": "114.0500",
                    "2. high": "114.0669",
                    "3. low": "113.9400",
                    "4. close": "113.9700",
                    "5. volume": "27394"
                },
                "2020-11-06 13:40:00": {
                    "1. open": "114.0700",
                    "2. high": "114.1400",
                    "3. low": "114.0436",
                    "4. close": "114.0500",
                    "5. volume": "31774"
                },
                "2020-11-06 13:35:00": {
                    "1. open": "114.1800",
                    "2. high": "114.1800",
                    "3. low": "114.0500",
                    "4. close": "114.0900",
                    "5. volume": "27848"
                },
                "2020-11-06 13:30:00": {
                    "1. open": "114.1640",
                    "2. high": "114.2350",
                    "3. low": "114.1200",
                    "4. close": "114.1900",
                    "5. volume": "42352"
                },
                "2020-11-06 13:25:00": {
                    "1. open": "114.0300",
                    "2. high": "114.1650",
                    "3. low": "114.0140",
                    "4. close": "114.1512",
                    "5. volume": "55606"
                },
                "2020-11-06 13:20:00": {
                    "1. open": "113.8800",
                    "2. high": "114.0350",
                    "3. low": "113.8000",
                    "4. close": "114.0200",
                    "5. volume": "34448"
                },
                "2020-11-06 13:15:00": {
                    "1. open": "113.8000",
                    "2. high": "113.9300",
                    "3. low": "113.7900",
                    "4. close": "113.8700",
                    "5. volume": "34840"
                },
                "2020-11-06 13:10:00": {
                    "1. open": "113.8200",
                    "2. high": "113.9059",
                    "3. low": "113.7800",
                    "4. close": "113.8050",
                    "5. volume": "29651"
                },
                "2020-11-06 13:05:00": {
                    "1. open": "113.8500",
                    "2. high": "113.9500",
                    "3. low": "113.7500",
                    "4. close": "113.8300",
                    "5. volume": "32119"
                },
                "2020-11-06 13:00:00": {
                    "1. open": "113.9400",
                    "2. high": "113.9400",
                    "3. low": "113.7850",
                    "4. close": "113.8700",
                    "5. volume": "24765"
                },
                "2020-11-06 12:55:00": {
                    "1. open": "113.9300",
                    "2. high": "113.9700",
                    "3. low": "113.9000",
                    "4. close": "113.9300",
                    "5. volume": "25717"
                },
                "2020-11-06 12:50:00": {
                    "1. open": "113.9500",
                    "2. high": "113.9550",
                    "3. low": "113.8100",
                    "4. close": "113.9200",
                    "5. volume": "23691"
                },
                "2020-11-06 12:45:00": {
                    "1. open": "113.8000",
                    "2. high": "113.9500",
                    "3. low": "113.7860",
                    "4. close": "113.9500",
                    "5. volume": "21129"
                },
                "2020-11-06 12:40:00": {
                    "1. open": "113.8700",
                    "2. high": "113.8800",
                    "3. low": "113.7400",
                    "4. close": "113.8050",
                    "5. volume": "36628"
                },
                "2020-11-06 12:35:00": {
                    "1. open": "113.9100",
                    "2. high": "113.9600",
                    "3. low": "113.8500",
                    "4. close": "113.8800",
                    "5. volume": "20824"
                },
                "2020-11-06 12:30:00": {
                    "1. open": "113.8991",
                    "2. high": "113.9900",
                    "3. low": "113.8300",
                    "4. close": "113.8600",
                    "5. volume": "29711"
                },
                "2020-11-06 12:25:00": {
                    "1. open": "113.9100",
                    "2. high": "113.9800",
                    "3. low": "113.8350",
                    "4. close": "113.8900",
                    "5. volume": "27356"
                },
                "2020-11-06 12:20:00": {
                    "1. open": "113.8100",
                    "2. high": "113.9283",
                    "3. low": "113.7700",
                    "4. close": "113.9200",
                    "5. volume": "38154"
                },
                "2020-11-06 12:15:00": {
                    "1. open": "113.8200",
                    "2. high": "113.8300",
                    "3. low": "113.6700",
                    "4. close": "113.8100",
                    "5. volume": "43909"
                },
                "2020-11-06 12:10:00": {
                    "1. open": "113.9500",
                    "2. high": "113.9600",
                    "3. low": "113.7550",
                    "4. close": "113.8100",
                    "5. volume": "42484"
                },
                "2020-11-06 12:05:00": {
                    "1. open": "114.0250",
                    "2. high": "114.1092",
                    "3. low": "113.9756",
                    "4. close": "113.9800",
                    "5. volume": "38879"
                },
                "2020-11-06 12:00:00": {
                    "1. open": "114.0100",
                    "2. high": "114.0500",
                    "3. low": "113.9050",
                    "4. close": "114.0500",
                    "5. volume": "89394"
                },
                "2020-11-06 11:55:00": {
                    "1. open": "114.0200",
                    "2. high": "114.0800",
                    "3. low": "113.9600",
                    "4. close": "114.0200",
                    "5. volume": "35570"
                },
                "2020-11-06 11:50:00": {
                    "1. open": "114.0300",
                    "2. high": "114.0478",
                    "3. low": "113.9100",
                    "4. close": "114.0000",
                    "5. volume": "30281"
                },
                "2020-11-06 11:45:00": {
                    "1. open": "114.0600",
                    "2. high": "114.1839",
                    "3. low": "113.9400",
                    "4. close": "114.0400",
                    "5. volume": "36110"
                },
                "2020-11-06 11:40:00": {
                    "1. open": "113.9200",
                    "2. high": "114.1200",
                    "3. low": "113.9000",
                    "4. close": "114.0500",
                    "5. volume": "37665"
                },
                "2020-11-06 11:35:00": {
                    "1. open": "113.9300",
                    "2. high": "113.9900",
                    "3. low": "113.8600",
                    "4. close": "113.9300",
                    "5. volume": "32505"
                },
                "2020-11-06 11:30:00": {
                    "1. open": "113.8400",
                    "2. high": "113.9985",
                    "3. low": "113.8300",
                    "4. close": "113.9200",
                    "5. volume": "40941"
                },
                "2020-11-06 11:25:00": {
                    "1. open": "113.9100",
                    "2. high": "113.9500",
                    "3. low": "113.7391",
                    "4. close": "113.8300",
                    "5. volume": "77128"
                },
                "2020-11-06 11:20:00": {
                    "1. open": "114.0600",
                    "2. high": "114.0715",
                    "3. low": "113.8577",
                    "4. close": "113.9100",
                    "5. volume": "49037"
                },
                "2020-11-06 11:15:00": {
                    "1. open": "114.1370",
                    "2. high": "114.2000",
                    "3. low": "113.9600",
                    "4. close": "114.0400",
                    "5. volume": "43754"
                },
                "2020-11-06 11:10:00": {
                    "1. open": "113.7800",
                    "2. high": "114.1600",
                    "3. low": "113.7700",
                    "4. close": "114.1500",
                    "5. volume": "34871"
                },
                "2020-11-06 11:05:00": {
                    "1. open": "113.7232",
                    "2. high": "113.9600",
                    "3. low": "113.6569",
                    "4. close": "113.8300",
                    "5. volume": "63700"
                },
                "2020-11-06 11:00:00": {
                    "1. open": "114.1200",
                    "2. high": "114.1800",
                    "3. low": "113.5300",
                    "4. close": "113.6900",
                    "5. volume": "63153"
                },
                "2020-11-06 10:55:00": {
                    "1. open": "114.0000",
                    "2. high": "114.1646",
                    "3. low": "113.9200",
                    "4. close": "114.0800",
                    "5. volume": "33327"
                },
                "2020-11-06 10:50:00": {
                    "1. open": "114.0500",
                    "2. high": "114.1555",
                    "3. low": "113.9200",
                    "4. close": "113.9650",
                    "5. volume": "60348"
                },
                "2020-11-06 10:45:00": {
                    "1. open": "113.9400",
                    "2. high": "114.2300",
                    "3. low": "113.9400",
                    "4. close": "114.0500",
                    "5. volume": "49287"
                },
                "2020-11-06 10:40:00": {
                    "1. open": "113.9800",
                    "2. high": "114.1000",
                    "3. low": "113.9200",
                    "4. close": "113.9200",
                    "5. volume": "78751"
                },
                "2020-11-06 10:35:00": {
                    "1. open": "114.0700",
                    "2. high": "114.1350",
                    "3. low": "113.9301",
                    "4. close": "114.0000",
                    "5. volume": "338445"
                },
                "2020-11-06 10:30:00": {
                    "1. open": "114.2499",
                    "2. high": "114.3000",
                    "3. low": "114.0600",
                    "4. close": "114.0700",
                    "5. volume": "70892"
                },
                "2020-11-06 10:25:00": {
                    "1. open": "114.2300",
                    "2. high": "114.3780",
                    "3. low": "114.1000",
                    "4. close": "114.2580",
                    "5. volume": "94916"
                },
                "2020-11-06 10:20:00": {
                    "1. open": "114.4400",
                    "2. high": "114.4700",
                    "3. low": "114.1300",
                    "4. close": "114.2200",
                    "5. volume": "52022"
                },
                "2020-11-06 10:15:00": {
                    "1. open": "114.1800",
                    "2. high": "114.4354",
                    "3. low": "114.1800",
                    "4. close": "114.4354",
                    "5. volume": "42848"
                },
                "2020-11-06 10:10:00": {
                    "1. open": "113.9300",
                    "2. high": "114.2100",
                    "3. low": "113.8800",
                    "4. close": "114.1800",
                    "5. volume": "44326"
                },
                "2020-11-06 10:05:00": {
                    "1. open": "113.7950",
                    "2. high": "114.0900",
                    "3. low": "113.7700",
                    "4. close": "113.9550",
                    "5. volume": "55056"
                },
                "2020-11-06 10:00:00": {
                    "1. open": "113.6700",
                    "2. high": "113.9000",
                    "3. low": "113.3900",
                    "4. close": "113.7900",
                    "5. volume": "104678"
                },
                "2020-11-06 09:55:00": {
                    "1. open": "114.2500",
                    "2. high": "114.3150",
                    "3. low": "113.6800",
                    "4. close": "113.7000",
                    "5. volume": "114434"
                },
                "2020-11-06 09:50:00": {
                    "1. open": "114.5402",
                    "2. high": "114.6100",
                    "3. low": "114.1800",
                    "4. close": "114.2200",
                    "5. volume": "55165"
                },
                "2020-11-06 09:45:00": {
                    "1. open": "114.5800",
                    "2. high": "114.8800",
                    "3. low": "114.5100",
                    "4. close": "114.5500",
                    "5. volume": "37682"
                },
                "2020-11-06 09:40:00": {
                    "1. open": "115.0000",
                    "2. high": "115.0000",
                    "3. low": "114.5800",
                    "4. close": "114.5800",
                    "5. volume": "46413"
                },
                "2020-11-06 09:35:00": {
                    "1. open": "115.0800",
                    "2. high": "115.1000",
                    "3. low": "114.5200",
                    "4. close": "115.0026",
                    "5. volume": "218123"
                },
                "2020-11-06 09:30:00": {
                    "1. open": "114.8507",
                    "2. high": "114.9000",
                    "3. low": "114.6700",
                    "4. close": "114.9000",
                    "5. volume": "1612"
                },
                "2020-11-06 09:25:00": {
                    "1. open": "115.0100",
                    "2. high": "115.0100",
                    "3. low": "115.0100",
                    "4. close": "115.0100",
                    "5. volume": "556"
                },
                "2020-11-06 09:20:00": {
                    "1. open": "115.0700",
                    "2. high": "115.1600",
                    "3. low": "115.0100",
                    "4. close": "115.0100",
                    "5. volume": "1840"
                },
                "2020-11-06 09:15:00": {
                    "1. open": "114.8600",
                    "2. high": "114.9900",
                    "3. low": "114.8600",
                    "4. close": "114.9704",
                    "5. volume": "1471"
                },
                "2020-11-06 09:10:00": {
                    "1. open": "114.8200",
                    "2. high": "114.8200",
                    "3. low": "114.8200",
                    "4. close": "114.8200",
                    "5. volume": "141"
                },
                "2020-11-06 09:05:00": {
                    "1. open": "114.8600",
                    "2. high": "114.8600",
                    "3. low": "114.8600",
                    "4. close": "114.8600",
                    "5. volume": "639"
                },
                "2020-11-06 09:00:00": {
                    "1. open": "114.8500",
                    "2. high": "114.8500",
                    "3. low": "114.8500",
                    "4. close": "114.8500",
                    "5. volume": "374"
                },
                "2020-11-06 08:55:00": {
                    "1. open": "114.7500",
                    "2. high": "114.7500",
                    "3. low": "114.7500",
                    "4. close": "114.7500",
                    "5. volume": "1422"
                },
                "2020-11-06 08:50:00": {
                    "1. open": "114.6000",
                    "2. high": "114.6000",
                    "3. low": "114.5998",
                    "4. close": "114.5998",
                    "5. volume": "246"
                },
                "2020-11-06 08:45:00": {
                    "1. open": "114.5800",
                    "2. high": "114.5800",
                    "3. low": "114.5800",
                    "4. close": "114.5800",
                    "5. volume": "875"
                },
                "2020-11-06 08:40:00": {
                    "1. open": "114.7400",
                    "2. high": "114.7400",
                    "3. low": "114.5000",
                    "4. close": "114.5000",
                    "5. volume": "518"
                },
                "2020-11-06 08:35:00": {
                    "1. open": "114.3500",
                    "2. high": "114.5000",
                    "3. low": "114.3500",
                    "4. close": "114.5000",
                    "5. volume": "1385"
                },
                "2020-11-06 08:25:00": {
                    "1. open": "114.0200",
                    "2. high": "114.0200",
                    "3. low": "114.0200",
                    "4. close": "114.0200",
                    "5. volume": "256"
                },
                "2020-11-06 08:20:00": {
                    "1. open": "114.1500",
                    "2. high": "114.1800",
                    "3. low": "114.1500",
                    "4. close": "114.1800",
                    "5. volume": "602"
                },
                "2020-11-06 08:10:00": {
                    "1. open": "113.8500",
                    "2. high": "114.0300",
                    "3. low": "113.8500",
                    "4. close": "114.0300",
                    "5. volume": "808"
                },
                "2020-11-06 08:05:00": {
                    "1. open": "114.2500",
                    "2. high": "114.3800",
                    "3. low": "114.0200",
                    "4. close": "114.2000",
                    "5. volume": "2204"
                },
                "2020-11-06 07:50:00": {
                    "1. open": "114.2000",
                    "2. high": "114.2000",
                    "3. low": "114.2000",
                    "4. close": "114.2000",
                    "5. volume": "260"
                },
                "2020-11-06 07:35:00": {
                    "1. open": "114.2500",
                    "2. high": "114.2500",
                    "3. low": "113.9600",
                    "4. close": "114.0000",
                    "5. volume": "2322"
                },
                "2020-11-06 07:20:00": {
                    "1. open": "114.3600",
                    "2. high": "114.3600",
                    "3. low": "114.2500",
                    "4. close": "114.2500",
                    "5. volume": "1122"
                },
                "2020-11-06 07:15:00": {
                    "1. open": "114.5000",
                    "2. high": "114.5000",
                    "3. low": "114.4000",
                    "4. close": "114.4000",
                    "5. volume": "1188"
                },
                "2020-11-06 07:10:00": {
                    "1. open": "114.4900",
                    "2. high": "114.4900",
                    "3. low": "114.4900",
                    "4. close": "114.4900",
                    "5. volume": "237"
                },
                "2020-11-06 07:05:00": {
                    "1. open": "114.3000",
                    "2. high": "114.3000",
                    "3. low": "114.3000",
                    "4. close": "114.3000",
                    "5. volume": "200"
                },
                "2020-11-06 05:10:00": {
                    "1. open": "114.0000",
                    "2. high": "114.0000",
                    "3. low": "114.0000",
                    "4. close": "114.0000",
                    "5. volume": "571"
                },
                "2020-11-06 04:05:00": {
                    "1. open": "114.6000",
                    "2. high": "114.6000",
                    "3. low": "114.6000",
                    "4. close": "114.6000",
                    "5. volume": "200"
                }
            }
        }

        return dummyData;
    }
};

export default API;