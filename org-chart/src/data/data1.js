export const data1 = [
    {
        "employeeId": 1,
        "position": "VP of Sales",
        "location": null,
        "status": "normal",
        "parentId": null,
        "children": [
            {
                "employeeId": 2,
                "position": "Sales Manager",
                "location": "North America",
                "status": "normal",
                "parentId": 1,
                "children": [
                    {
                        "employeeId": 4,
                        "position": "Sales Lead",
                        "location": "Canada",
                        "status": "normal",
                        "parentId": 2,
                        "children": [
                            {
                                "employeeId": 8,
                                "position": "Sales Representative",
                                "location": "Toronto",
                                "status": "normal",
                                "parentId": 4 
                            },
                            {
                                "employeeId": 9,
                                "position": "Sales Representative",
                                "location": "Vancouver",
                                "status": "normal",
                                "parentId": 4 
                            }
                        ] 
                    },
                    {
                        "employeeId": 5,
                        "position": "Sales Lead",
                        "location": "USA",
                        "status": "warning",
                        "parentId": 2,
                        "children": [
                            {
                                "employeeId": 9,
                                "position": "Sales Representative",
                                "location": "New York",
                                "status": "normal",
                                "parentId": 5 
                            },
                            {
                                "employeeId": 10,
                                "position": "Sales Representative",
                                "location": "Dallas",
                                "status": "warning",
                                "parentId": 5 
                            },
                            {
                                "employeeId": 11,
                                "position": "Sales Representative",
                                "location": "Los Angeles",
                                "status": "warning",
                                "parentId": 5 
                            }
                        ]
                    }
                ] 
            },
            {
                "employeeId": 3,
                "position": "Sales Manager",
                "location": "Europe",
                "status": "warning",
                "parentId": 1,
                "children": [
                    {
                        "employeeId": 6,
                        "position": "Sales Lead",
                        "location": "Germany",
                        "status": "warning",
                        "parentId": 3,
                        "children": [
                            {
                                "employeeId": 12,
                                "position": "Sales Representative",
                                "location": "Berlin",
                                "status": "normal",
                                "parentId": 6 
                            },
                            {
                                "employeeId": 13,
                                "position": "Sales Representative",
                                "location": "Frankfurt",
                                "status": "warning",
                                "parentId": 6 
                            }
                        ] 
                    },
                    {
                        "employeeId": 7,
                        "position": "Sales Lead",
                        "location": "Italy",
                        "status": "normal",
                        "parentId": 3,
                        "children": [
                            {
                                "employeeId": 14,
                                "position": "Sales Representative",
                                "location": "Milan",
                                "status": "normal",
                                "parentId": 7 
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

