interface SelectArticle {
    id: number;
    value: string | number;
    label: string;
}

const hazardClass: SelectArticle[] = [
    {
        id: 1,
        value: '1-й - вещества чрезвычайно опасные',
        label: '1-й - вещества чрезвычайно опасные',
    },
    {
        id: 2,
        value: '2-й - вещества высокоопасные',
        label: '2-й - вещества высокоопасные'
    },
    {
        id: 3,
        value: '3-й - вещества умеренно опасные',
        label: '3-й - вещества умеренно опасные'
    },
    {
        id: 4,
        value: '4-й - вещества малоопасные',
        label: '4-й - вещества малоопасные'
    }
];

const additionalServices: SelectArticle[] = [
    {
        id: 1,
        value: 'service-1',
        label: 'Таможенное оформление'
    },
    {
        id: 2,
        value: 'service-2',
        label: 'Страхование рисков'
    },
    {
        id: 3,
        value: 'service-3',
        label: 'Складское хранение'
    }
];

const transportType: SelectArticle[] = [
    {
        id: 1,
        value: 1,
        label: 'Тент 90м3'
    },
    {
        id: 2,
        value: 2,
        label: 'Тент 120 м3'
    },
    {
        id: 3,
        value: 3,
        label: 'Реф'
    },
    {
        id: 4,
        value: 5,
        label: 'Контейнер 40 DC'
    },
    {
        id: 5,
        value: 5,
        label: 'Контейнер 40 HC'
    },
    {
        id: 6,
        value: 6,
        label: 'Контейнер 20 DC'
    },
    {
        id: 7,
        value: 7,
        label: 'ЖД'
    },
    {
        id: 8,
        value: 8,
        label: 'Авиа'
    },
    {
        id: 9,
        value: 9,
        label: 'Иное'
    }
];

const countries: SelectArticle[] = [
    {id: 1, value: 'BY', label: 'Беларусь'},
    {id: 2, value: 'RU', label: 'Россия'},
    {id: 3, label: 'Afghanistan', value: 'AF'},
    {id: 4, label: 'Åland Islands', value: 'AX'},
    {id: 5, label: 'Albania', value: 'AL'},
    {id: 6, label: 'Algeria', value: 'DZ'},
    {id: 7, label: 'American Samoa', value: 'AS'},
    {id: 8, label: 'AndorrA', value: 'AD'},
    {id: 9, label: 'Angola', value: 'AO'},
    {id: 10, label: 'Anguilla', value: 'AI'},
    {id: 11, label: 'Antarctica', value: 'AQ'},
    {id: 12, label: 'Antigua and Barbuda', value: 'AG'},
    {id: 13, label: 'Argentina', value: 'AR'},
    {id: 14, label: 'Armenia', value: 'AM'},
    {id: 15, label: 'Aruba', value: 'AW'},
    {id: 16, label: 'Australia', value: 'AU'},
    {id: 17, label: 'Austria', value: 'AT'},
    {id: 18, label: 'Azerbaijan', value: 'AZ'},
    {id: 19, label: 'Bahamas', value: 'BS'},
    {id: 20, label: 'Bahrain', value: 'BH'},
    {id: 21, label: 'Bangladesh', value: 'BD'},
    {id: 22, label: 'Barbados', value: 'BB'},
    {id: 23, label: 'Belgium', value: 'BE'},
    {id: 24, label: 'Belize', value: 'BZ'},
    {id: 25, label: 'Benin', value: 'BJ'},
    {id: 26, label: 'Bermuda', value: 'BM'},
    {id: 27, label: 'Bhutan', value: 'BT'},
    {id: 28, label: 'Bolivia', value: 'BO'},
    {id: 29, label: 'Bosnia and Herzegovina', value: 'BA'},
    {id: 30, label: 'Botswana', value: 'BW'},
    {id: 31, label: 'Bouvet Island', value: 'BV'},
    {id: 32, label: 'Brazil', value: 'BR'},
    {id: 33, label: 'British Indian Ocean Territory', value: 'IO'},
    {id: 34, label: 'Brunei Darussalam', value: 'BN'},
    {id: 35, label: 'Bulgaria', value: 'BG'},
    {id: 36, label: 'Burkina Faso', value: 'BF'},
    {id: 37, label: 'Burundi', value: 'BI'},
    {id: 38, label: 'Cambodia', value: 'KH'},
    {id: 39, label: 'Cameroon', value: 'CM'},
    {id: 40, label: 'Canada', value: 'CA'},
    {id: 41, label: 'Cape Verde', value: 'CV'},
    {id: 42, label: 'Cayman Islands', value: 'KY'},
    {id: 43, label: 'Central African Republic', value: 'CF'},
    {id: 44, label: 'Chad', value: 'TD'},
    {id: 45, label: 'Chile', value: 'CL'},
    {id: 46, label: 'China', value: 'CN'},
    {id: 47, label: 'Christmas Island', value: 'CX'},
    {id: 48, label: 'Cocos (Keeling) Islands', value: 'CC'},
    {id: 49, label: 'Colombia', value: 'CO'},
    {id: 50, label: 'Comoros', value: 'KM'},
    {id: 51, label: 'Congo', value: 'CG'},
    {id: 52, label: 'Congo, The Democratic Republic of the', value: 'CD'},
    {id: 53, label: 'Cook Islands', value: 'CK'},
    {id: 54, label: 'Costa Rica', value: 'CR'},
    {id: 55, label: 'Cote D\'Ivoire', value: 'CI'},
    {id: 56, label: 'Croatia', value: 'HR'},
    {id: 57, label: 'Cuba', value: 'CU'},
    {id: 58, label: 'Cyprus', value: 'CY'},
    {id: 59, label: 'Czech Republic', value: 'CZ'},
    {id: 60, label: 'Denmark', value: 'DK'},
    {id: 61, label: 'Djibouti', value: 'DJ'},
    {id: 62, label: 'Dominica', value: 'DM'},
    {id: 63, label: 'Dominican Republic', value: 'DO'},
    {id: 64, label: 'Ecuador', value: 'EC'},
    {id: 65, label: 'Egypt', value: 'EG'},
    {id: 66, label: 'El Salvador', value: 'SV'},
    {id: 67, label: 'Equatorial Guinea', value: 'GQ'},
    {id: 68, label: 'Eritrea', value: 'ER'},
    {id: 69, label: 'Estonia', value: 'EE'},
    {id: 70, label: 'Ethiopia', value: 'ET'},
    {id: 71, label: 'Falkland Islands (Malvinas)', value: 'FK'},
    {id: 72, label: 'Faroe Islands', value: 'FO'},
    {id: 73, label: 'Fiji', value: 'FJ'},
    {id: 74, label: 'Finland', value: 'FI'},
    {id: 75, label: 'France', value: 'FR'},
    {id: 76, label: 'French Guiana', value: 'GF'},
    {id: 77, label: 'French Polynesia', value: 'PF'},
    {id: 78, label: 'French Southern Territories', value: 'TF'},
    {id: 79, label: 'Gabon', value: 'GA'},
    {id: 80, label: 'Gambia', value: 'GM'},
    {id: 81, label: 'Georgia', value: 'GE'},
    {id: 82, label: 'Germany', value: 'DE'},
    {id: 83, label: 'Ghana', value: 'GH'},
    {id: 84, label: 'Gibraltar', value: 'GI'},
    {id: 85, label: 'Greece', value: 'GR'},
    {id: 86, label: 'Greenland', value: 'GL'},
    {id: 87, label: 'Grenada', value: 'GD'},
    {id: 88, label: 'Guadeloupe', value: 'GP'},
    {id: 89, label: 'Guam', value: 'GU'},
    {id: 90, label: 'Guatemala', value: 'GT'},
    {id: 91, label: 'Guernsey', value: 'GG'},
    {id: 92, label: 'Guinea', value: 'GN'},
    {id: 93, label: 'Guinea-Bissau', value: 'GW'},
    {id: 94, label: 'Guyana', value: 'GY'},
    {id: 95, label: 'Haiti', value: 'HT'},
    {id: 96, label: 'Heard Island and Mcdonald Islands', value: 'HM'},
    {id: 97, label: 'Holy See (Vatican City State)', value: 'VA'},
    {id: 98, label: 'Honduras', value: 'HN'},
    {id: 99, label: 'Hong Kong', value: 'HK'},
    {id: 100, label: 'Hungary', value: 'HU'},
    {id: 101, label: 'Iceland', value: 'IS'},
    {id: 102, label: 'India', value: 'IN'},
    {id: 103, label: 'Indonesia', value: 'ID'},
    {id: 104, label: 'Iran, Islamic Republic Of', value: 'IR'},
    {id: 105, label: 'Iraq', value: 'IQ'},
    {id: 106, label: 'Ireland', value: 'IE'},
    {id: 107, label: 'Isle of Man', value: 'IM'},
    {id: 108, label: 'Israel', value: 'IL'},
    {id: 109, label: 'Italy', value: 'IT'},
    {id: 110, label: 'Jamaica', value: 'JM'},
    {id: 111, label: 'Japan', value: 'JP'},
    {id: 112, label: 'Jersey', value: 'JE'},
    {id: 113, label: 'Jordan', value: 'JO'},
    {id: 114, label: 'Kazakhstan', value: 'KZ'},
    {id: 115, label: 'Kenya', value: 'KE'},
    {id: 116, label: 'Kiribati', value: 'KI'},
    {id: 117, label: 'Korea, Democratic People\'S Republic of', value: 'KP'},
    {id: 118, label: 'Korea, Republic of', value: 'KR'},
    {id: 119, label: 'Kuwait', value: 'KW'},
    {id: 120, label: 'Kyrgyzstan', value: 'KG'},
    {id: 121, label: 'Lao People\'S Democratic Republic', value: 'LA'},
    {id: 122, label: 'Latvia', value: 'LV'},
    {id: 123, label: 'Lebanon', value: 'LB'},
    {id: 124, label: 'Lesotho', value: 'LS'},
    {id: 125, label: 'Liberia', value: 'LR'},
    {id: 126, label: 'Libyan Arab Jamahiriya', value: 'LY'},
    {id: 127, label: 'Liechtenstein', value: 'LI'},
    {id: 128, label: 'Lithuania', value: 'LT'},
    {id: 129, label: 'Luxembourg', value: 'LU'},
    {id: 130, label: 'Macao', value: 'MO'},
    {id: 131, label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
    {id: 132, label: 'Madagascar', value: 'MG'},
    {id: 133, label: 'Malawi', value: 'MW'},
    {id: 134, label: 'Malaysia', value: 'MY'},
    {id: 135, label: 'Maldives', value: 'MV'},
    {id: 136, label: 'Mali', value: 'ML'},
    {id: 137, label: 'Malta', value: 'MT'},
    {id: 138, label: 'Marshall Islands', value: 'MH'},
    {id: 139, label: 'Martinique', value: 'MQ'},
    {id: 140, label: 'Mauritania', value: 'MR'},
    {id: 141, label: 'Mauritius', value: 'MU'},
    {id: 142, label: 'Mayotte', value: 'YT'},
    {id: 143, label: 'Mexico', value: 'MX'},
    {id: 144, label: 'Micronesia, Federated States of', value: 'FM'},
    {id: 145, label: 'Moldova, Republic of', value: 'MD'},
    {id: 146, label: 'Monaco', value: 'MC'},
    {id: 147, label: 'Mongolia', value: 'MN'},
    {id: 148, label: 'Montserrat', value: 'MS'},
    {id: 149, label: 'Morocco', value: 'MA'},
    {id: 150, label: 'Mozambique', value: 'MZ'},
    {id: 151, label: 'Myanmar', value: 'MM'},
    {id: 152, label: 'Namibia', value: 'NA'},
    {id: 153, label: 'Nauru', value: 'NR'},
    {id: 154, label: 'Nepal', value: 'NP'},
    {id: 155, label: 'Netherlands', value: 'NL'},
    {id: 156, label: 'Netherlands Antilles', value: 'AN'},
    {id: 157, label: 'New Caledonia', value: 'NC'},
    {id: 158, label: 'New Zealand', value: 'NZ'},
    {id: 159, label: 'Nicaragua', value: 'NI'},
    {id: 160, label: 'Niger', value: 'NE'},
    {id: 161, label: 'Nigeria', value: 'NG'},
    {id: 162, label: 'Niue', value: 'NU'},
    {id: 163, label: 'Norfolk Island', value: 'NF'},
    {id: 164, label: 'Northern Mariana Islands', value: 'MP'},
    {id: 165, label: 'Norway', value: 'NO'},
    {id: 166, label: 'Oman', value: 'OM'},
    {id: 167, label: 'Pakistan', value: 'PK'},
    {id: 168, label: 'Palau', value: 'PW'},
    {id: 169, label: 'Palestinian Territory, Occupied', value: 'PS'},
    {id: 170, label: 'Panama', value: 'PA'},
    {id: 171, label: 'Papua New Guinea', value: 'PG'},
    {id: 172, label: 'Paraguay', value: 'PY'},
    {id: 173, label: 'Peru', value: 'PE'},
    {id: 174, label: 'Philippines', value: 'PH'},
    {id: 175, label: 'Pitcairn', value: 'PN'},
    {id: 176, label: 'Poland', value: 'PL'},
    {id: 177, label: 'Portugal', value: 'PT'},
    {id: 178, label: 'Puerto Rico', value: 'PR'},
    {id: 179, label: 'Qatar', value: 'QA'},
    {id: 180, label: 'Reunion', value: 'RE'},
    {id: 181, label: 'Romania', value: 'RO'},
    {id: 182, label: 'Russian Federation', value: 'RU'},
    {id: 183, label: 'RWANDA', value: 'RW'},
    {id: 184, label: 'Saint Helena', value: 'SH'},
    {id: 185, label: 'Saint Kitts and Nevis', value: 'KN'},
    {id: 186, label: 'Saint Lucia', value: 'LC'},
    {id: 187, label: 'Saint Pierre and Miquelon', value: 'PM'},
    {id: 188, label: 'Saint Vincent and the Grenadines', value: 'VC'},
    {id: 189, label: 'Samoa', value: 'WS'},
    {id: 190, label: 'San Marino', value: 'SM'},
    {id: 191, label: 'Sao Tome and Principe', value: 'ST'},
    {id: 192, label: 'Saudi Arabia', value: 'SA'},
    {id: 193, label: 'Senegal', value: 'SN'},
    {id: 194, label: 'Serbia and Montenegro', value: 'CS'},
    {id: 195, label: 'Seychelles', value: 'SC'},
    {id: 196, label: 'Sierra Leone', value: 'SL'},
    {id: 197, label: 'Singapore', value: 'SG'},
    {id: 198, label: 'Slovakia', value: 'SK'},
    {id: 199, label: 'Slovenia', value: 'SI'},
    {id: 200, label: 'Solomon Islands', value: 'SB'},
    {id: 201, label: 'Somalia', value: 'SO'},
    {id: 202, label: 'South Africa', value: 'ZA'},
    {id: 203, label: 'South Georgia and the South Sandwich Islands', value: 'GS'},
    {id: 204, label: 'Spain', value: 'ES'},
    {id: 205, label: 'Sri Lanka', value: 'LK'},
    {id: 206, label: 'Sudan', value: 'SD'},
    {id: 207, label: 'Suriname', value: 'SR'},
    {id: 208, label: 'Svalbard and Jan Mayen', value: 'SJ'},
    {id: 209, label: 'Swaziland', value: 'SZ'},
    {id: 210, label: 'Sweden', value: 'SE'},
    {id: 211, label: 'Switzerland', value: 'CH'},
    {id: 212, label: 'Syrian Arab Republic', value: 'SY'},
    {id: 213, label: 'Taiwan, Province of China', value: 'TW'},
    {id: 214, label: 'Tajikistan', value: 'TJ'},
    {id: 215, label: 'Tanzania, United Republic of', value: 'TZ'},
    {id: 216, label: 'Thailand', value: 'TH'},
    {id: 217, label: 'Timor-Leste', value: 'TL'},
    {id: 218, label: 'Togo', value: 'TG'},
    {id: 219, label: 'Tokelau', value: 'TK'},
    {id: 220, label: 'Tonga', value: 'TO'},
    {id: 221, label: 'Trinidad and Tobago', value: 'TT'},
    {id: 222, label: 'Tunisia', value: 'TN'},
    {id: 223, label: 'Turkey', value: 'TR'},
    {id: 224, label: 'Turkmenistan', value: 'TM'},
    {id: 225, label: 'Turks and Caicos Islands', value: 'TC'},
    {id: 226, label: 'Tuvalu', value: 'TV'},
    {id: 227, label: 'Uganda', value: 'UG'},
    {id: 228, label: 'Ukraine', value: 'UA'},
    {id: 229, label: 'United Arab Emirates', value: 'AE'},
    {id: 230, label: 'United Kingdom', value: 'GB'},
    {id: 231, label: 'United States', value: 'US'},
    {id: 232, label: 'United States Minor Outlying Islands', value: 'UM'},
    {id: 233, label: 'Uruguay', value: 'UY'},
    {id: 234, label: 'Uzbekistan', value: 'UZ'},
    {id: 235, label: 'Vanuatu', value: 'VU'},
    {id: 236, label: 'Venezuela', value: 'VE'},
    {id: 237, label: 'Viet Nam', value: 'VN'},
    {id: 238, label: 'Virgin Islands, British', value: 'VG'},
    {id: 239, label: 'Virgin Islands, U.S.', value: 'VI'},
    {id: 240, label: 'Wallis and Futuna', value: 'WF'},
    {id: 241, label: 'Western Sahara', value: 'EH'},
    {id: 242, label: 'Yemen', value: 'YE'},
    {id: 243, label: 'Zambia', value: 'ZM'},
    {id: 244, label: 'Zimbabwe', value: 'ZW'}
];

const cities: SelectArticle[] = [
    {
        id: 1,
        value: 'city_1',
        label: 'Название города 1'
    },
    {
        id: 2,
        value: 'city_2',
        label: 'Название города 2'
    },
    {
        id: 3,
        value: 'city_3',
        label: 'Название города 3'
    },
    {
        id: 4,
        value: 'city_4',
        label: 'Название города 4'
    },
    {
        id: 5,
        value: 'city_5',
        label: 'Название города 5'
    },
    {
        id: 6,
        value: 'city_6',
        label: 'Название города 6'
    },
    {
        id: 7,
        value: 'city_7',
        label: 'Название города 7'
    }
];

const procedure: SelectArticle[] = [
    {
        id: 1,
        value: 'ИМ40',
        label: 'ИМ40 — выпуск для внутреннего потребления'
    },
    {
        id: 2,
        value: 'ИМ51',
        label: 'ИМ51 — переработка на таможенной территории'
    },
    {
        id: 3,
        value: 'ИМ53',
        label: 'ИМ53 — временный ввоз (допуск)'
    },
    {
        id: 4,
        value: 'ИМ60',
        label: 'ИМ60 — реимпорт'
    },
    {
        id: 5,
        value: 'ИМ70',
        label: 'ИМ70 — таможенный склад'
    },
    {
        id: 6,
        value: 'ИМ91',
        label: 'ИМ91 — переработка для внутреннего потребления'
    },
    {
        id: 7,
        value: 'ИМ93',
        label: 'ИМ93 — уничтожение'
    },
    {
        id: 8,
        value: 'ИМ94',
        label: 'ИМ94 — отказ в пользу государства'
    },
    {
        id: 9,
        value: 'ЭК10',
        label: 'ЭК10 — экспорт'
    },
    {
        id: 10,
        value: 'ЭК21',
        label: 'ЭК21 — переработка вне таможенной территории'
    },
    {
        id: 11,
        value: 'ЭК23',
        label: 'ЭК23 — временный вывоз'
    },
    {
        id: 12,
        value: 'ЭК31',
        label: 'ЭК31 — реэкспорт'
    },
    {
        id: 13,
        value: 'ИМ77/ЭК77',
        label: 'ИМ77/ЭК77 — свободный склад'
    },
    {
        id: 14,
        value: 'ИМ78/ЭК78',
        label: 'ИМ78/ЭК78 — свободная таможенная зона'
    },
    {
        id: 15,
        value: 'ИМ90/ЭК90',
        label: 'ИМ90/ЭК90 — специальная таможенная процедура'
    },
    {
        id: 16,
        value: 'ИМ96/ЭК96',
        label: 'ИМ96/ЭК96 — беспошлинная торговля'
    },
    {
        id: 17,
        value: 'ТТ',
        label: 'ТТ — таможенный транзит'
    }
];

const deliveryCondition: SelectArticle[] = [
    {
        id: 1,
        value: 'EXW',
        label: 'EXW'
    },
    {
        id: 2,
        value: 'FCA',
        label: 'FCA'
    },
    {
        id: 3,
        value: 'FAS',
        label: 'FAS'
    },
    {
        id: 4,
        value: 'FOB',
        label: 'FOB'
    },
    {
        id: 5,
        value: 'CPT',
        label: 'CPT'
    },
    {
        id: 6,
        value: 'CIP',
        label: 'CIP'
    },
    {
        id: 7,
        value: 'CFR',
        label: 'CFR'
    },
    {
        id: 8,
        value: 'CIF',
        label: 'CIF'
    },
    {
        id: 9,
        value: 'DAP',
        label: 'DAP'
    },
    {
        id: 10,
        value: 'DPU',
        label: 'DPU'
    },
    {
        id: 11,
        value: 'DDP',
        label: 'DDP'
    }
];

const packageList: SelectArticle[] = [
    {
        id: 1,
        value: 'В короба',
        label: 'В короба'
    },
    {
        id: 2,
        value: 'На паллеты',
        label: 'На паллеты'
    },
    {
        id: 3,
        value: 'Другое',
        label: 'Другое'
    }
]

export {
    hazardClass,
    additionalServices,
    transportType,
    countries,
    cities,
    procedure,
    deliveryCondition,
    packageList
};
