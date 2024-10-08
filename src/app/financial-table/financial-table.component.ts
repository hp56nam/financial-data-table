import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-financial-table',
  standalone: true,
  templateUrl: './financial-table.component.html',
  styleUrls: ['./financial-table.component.scss'],
  imports: [MatTableModule, MatTooltipModule, CommonModule]
})
export class FinancialTableComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = [];
  monthHeaders: string[] = [];
  filteredData: any[] = [];
  // Data mock
  sourceData = [
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 7,
     "YearID": 2021,
     "TotalIncome": 103054,
     "TotalExpenses": 84104,
     "CostofSales": 40579,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 8,
     "YearID": 2021,
     "TotalIncome": 113652,
     "TotalExpenses": 159640,
     "CostofSales": 18229,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2021,
     "TotalIncome": 206521.34,
     "TotalExpenses": 204927.14,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2021,
     "TotalIncome": 206521.34,
     "TotalExpenses": 204927.14,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2021,
     "TotalIncome": 206521.34,
     "TotalExpenses": 204927.14,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2021,
     "TotalIncome": 137155,
     "TotalExpenses": 106414,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2021,
     "TotalIncome": 137155,
     "TotalExpenses": 106414,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2021,
     "TotalIncome": 137155,
     "TotalExpenses": 106414,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 9,
     "YearID": 2021,
     "TotalIncome": 96012,
     "TotalExpenses": 76263,
     "CostofSales": 69481,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 11,
     "YearID": 2021,
     "TotalIncome": 68286,
     "TotalExpenses": 165667,
     "CostofSales": 12941,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2021,
     "TotalIncome": 154070,
     "TotalExpenses": 147038,
     "CostofSales": 21220,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2021,
     "TotalIncome": 154070,
     "TotalExpenses": 147038,
     "CostofSales": 21220,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2021,
     "TotalIncome": 154070,
     "TotalExpenses": 147038,
     "CostofSales": 21220,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 10,
     "YearID": 2021,
     "TotalIncome": 207563,
     "TotalExpenses": 134076,
     "CostofSales": 35638,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 12,
     "YearID": 2021,
     "TotalIncome": 86874,
     "TotalExpenses": 140176,
     "CostofSales": 3834,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2021,
     "TotalIncome": 121138,
     "TotalExpenses": 163964,
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2021,
     "TotalIncome": 121138,
     "TotalExpenses": 163964,
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2021,
     "TotalIncome": 121138,
     "TotalExpenses": 163964,
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2021,
     "TotalIncome": 160458,
     "TotalExpenses": 116693,
     "CostofSales": 3478,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2021,
     "TotalIncome": 160458,
     "TotalExpenses": 116693,
     "CostofSales": 3478,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2021,
     "TotalIncome": 160458,
     "TotalExpenses": 116693,
     "CostofSales": 3478,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 1,
     "YearID": 2022,
     "TotalIncome": 114181,
     "TotalExpenses": 85595,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2022,
     "TotalIncome": 123999,
     "TotalExpenses": 125478,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2022,
     "TotalIncome": 123999,
     "TotalExpenses": 125478,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2022,
     "TotalIncome": 123999,
     "TotalExpenses": 125478,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2022,
     "TotalIncome": 216244,
     "TotalExpenses": 146454,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2022,
     "TotalIncome": 216244,
     "TotalExpenses": 146454,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2022,
     "TotalIncome": 216244,
     "TotalExpenses": 146454,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 2,
     "YearID": 2022,
     "TotalIncome": 57937,
     "TotalExpenses": 113324,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 190216,
     "TotalExpenses": 52446,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 206395,
     "TotalExpenses": 191240,
     "CostofSales": 5137,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 206395,
     "TotalExpenses": 191240,
     "CostofSales": 5137,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 206395,
     "TotalExpenses": 191240,
     "CostofSales": 5137,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 1114251,
     "TotalExpenses": 657084,
     "CostofSales": 495781,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 1183891,
     "TotalExpenses": 698152,
     "CostofSales": 526767,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 3,
     "YearID": 2022,
     "TotalIncome": 160958,
     "TotalExpenses": 189801,
     "CostofSales": 143503,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 286965,
     "TotalExpenses": 189697,
     "CostofSales": 77291,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 146136,
     "TotalExpenses": 132604,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 146136,
     "TotalExpenses": 132604,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 146136,
     "TotalExpenses": 132604,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2021,
     "TotalIncome": 126103,
     "TotalExpenses": 166546,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2021,
     "TotalIncome": 126103,
     "TotalExpenses": 166546,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2021,
     "TotalIncome": 126103,
     "TotalExpenses": 166546,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 134641,
     "TotalExpenses": 174354,
     "CostofSales": 7387,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 134641,
     "TotalExpenses": 174354,
     "CostofSales": 7387,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 134641,
     "TotalExpenses": 174354,
     "CostofSales": 7387,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 301358,
     "TotalExpenses": 187626,
     "CostofSales": 87523,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 6,
     "YearID": 2022,
     "TotalIncome": 1323173,
     "TotalExpenses": 780287,
     "CostofSales": 588740,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3178.32",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 6,
     "YearID": 2022,
     "TotalIncome": 368960,
     "TotalExpenses": 199190,
     "CostofSales": 124814,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3202.29",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 1253532,
     "TotalExpenses": 739219,
     "CostofSales": 557753,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 4,
     "YearID": 2022,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2308.26",
     "MonthID": 5,
     "YearID": 2022,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 7,
     "YearID": 2022,
     "TotalIncome": 324425,
     "TotalExpenses": 300927,
     "CostofSales": 79232,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3388.95",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 8,
     "YearID": 2022,
     "TotalIncome": 283757,
     "TotalExpenses": 215892,
     "CostofSales": 39288,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_0.51",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_0.51",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_0.51",
     "MonthID": 0,
     "YearID": 2022,
     "TotalIncome": "NULL",
     "TotalExpenses": 1,
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_0.51",
     "MonthID": 0,
     "YearID": 2022,
     "TotalIncome": "NULL",
     "TotalExpenses": 1,
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 9,
     "YearID": 2022,
     "TotalIncome": 315228,
     "TotalExpenses": 242306,
     "CostofSales": 106029,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3208.92",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3339.99",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3299.70",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3245.13",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 10,
     "YearID": 2022,
     "TotalIncome": 274463,
     "TotalExpenses": 191928,
     "CostofSales": 130221.16,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3243.09",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.13",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3198.72",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3198.72",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.71",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3213.00",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3335.40",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3175.77",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3176.79",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3217.59",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.87",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3194.13",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3338.97",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3214.53",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3326.22",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3277.26",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3186.99",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3184.44",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3343.56",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3181.38",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3321.63",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3184.95",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3236.97",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3409.35",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.64",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3345.60",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3305.82",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3335.91",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3337.44",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3391.50",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3320.10",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3217.08",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3418.53",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3396.60",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3260.43",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3408.84",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3425.16",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3206.88",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3404.76",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3404.25",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3421.59",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3319.59",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3306.33",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3191.58",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3191.58",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3403.23",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3427.20",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3428.73",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3330.81",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3172.20",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3396.09",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3314.49",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 7,
     "YearID": 2022,
     "TotalIncome": 1462454,
     "TotalExpenses": 862423,
     "CostofSales": 650712,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 8,
     "YearID": 2022,
     "TotalIncome": 1532095,
     "TotalExpenses": 903490,
     "CostofSales": 681698,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 9,
     "YearID": 2022,
     "TotalIncome": 1601735,
     "TotalExpenses": 944558,
     "CostofSales": 712685,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 10,
     "YearID": 2022,
     "TotalIncome": 1671376,
     "TotalExpenses": 985626,
     "CostofSales": 743671,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3172.71",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3350.70",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3422.10",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3410.37",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3197.19",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.87",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3351.72",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3388.44",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 11,
     "YearID": 2022,
     "TotalIncome": 233456.11,
     "TotalExpenses": 167558,
     "CostofSales": 148852,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3183.93",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3259.92",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3214.02",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3466.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 12,
     "YearID": 2022,
     "TotalIncome": 295606.28,
     "TotalExpenses": 277201.08,
     "CostofSales": 93581,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 11,
     "YearID": 2022,
     "TotalIncome": 1222499,
     "TotalExpenses": 755308,
     "CostofSales": 454261,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 12,
     "YearID": 2022,
     "TotalIncome": 1010054,
     "TotalExpenses": 749174,
     "CostofSales": 461802,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 600,
     "TotalExpenses": 400,
     "CostofSales": 400,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 20000,
     "TotalExpenses": 12000,
     "CostofSales": 8000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3343.56",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 85000,
     "TotalExpenses": 57000,
     "CostofSales": 38000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3876.00",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3394.56",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 12,
     "YearID": 2022,
     "TotalIncome": 170024,
     "TotalExpenses": 119473,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3196.68",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3586.32",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 239968,
     "TotalExpenses": 248360,
     "CostofSales": 97480,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 184298,
     "TotalExpenses": 168075,
     "CostofSales": 56552,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 261830.93,
     "TotalExpenses": 123961.3,
     "CostofSales": 137176.37,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 4782,
     "CostofSales": 87,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 34040,
     "TotalExpenses": 8800,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3214.53",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 41926.7,
     "TotalExpenses": 10000,
     "CostofSales": 3000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 175238,
     "TotalExpenses": 136725,
     "CostofSales": 54323,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 1944120,
     "TotalExpenses": 894986,
     "CostofSales": 858373,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.88",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3176.79",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 21000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3222.69",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3176.79",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 388125,
     "TotalExpenses": 396000,
     "CostofSales": 310500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2485.23",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 304779,
     "TotalExpenses": 220674,
     "CostofSales": 78223,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3343.05",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 68021,
     "TotalExpenses": 53137,
     "CostofSales": 26015,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 69818,
     "TotalExpenses": 45000,
     "CostofSales": 36376,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 19696,
     "CostofSales": 245,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 351820,
     "TotalExpenses": 304203,
     "CostofSales": 109064,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 61590,
     "TotalExpenses": 81272,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 125955,
     "TotalExpenses": 83471,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 34040,
     "TotalExpenses": 11500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 67312,
     "TotalExpenses": 54348,
     "CostofSales": 11635,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.38",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.38",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.38",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3305.31",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3176.79",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 47000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 26067,
     "TotalExpenses": 3027,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 839458,
     "TotalExpenses": 242105,
     "CostofSales": 88553,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 9000,
     "TotalExpenses": 78000,
     "CostofSales": 42250,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 50000,
     "TotalExpenses": 18619,
     "CostofSales": 10702,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 50000,
     "TotalExpenses": 19939,
     "CostofSales": 46678,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3318.06",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 83887,
     "TotalExpenses": 18311,
     "CostofSales": 58721,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3892.83",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 13950,
     "TotalExpenses": 13625,
     "CostofSales": 250,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3423.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3338.97",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 15000,
     "TotalExpenses": 5000,
     "CostofSales": 2500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 1269405,
     "TotalExpenses": 182661,
     "CostofSales": 1142464,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3228.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 390369,
     "TotalExpenses": 175666,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 34040,
     "TotalExpenses": 8800,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 79264,
     "TotalExpenses": 114448,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 1049000,
     "TotalExpenses": 236900,
     "CostofSales": 613000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3815.31",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3677.61",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3696.48",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.98",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3689.85",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3873.45",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3872.94",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3679.65",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3688.32",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 50000,
     "TotalExpenses": 9345,
     "CostofSales": 35343,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 57922,
     "TotalExpenses": 53320,
     "CostofSales": 31906,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3299.70",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 139975,
     "TotalExpenses": 86691,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 96600,
     "TotalExpenses": 23550,
     "CostofSales": 13500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 1694715,
     "TotalExpenses": -382159,
     "CostofSales": 1229357,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 684592,
     "TotalExpenses": 297539,
     "CostofSales": 205197,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3278.79",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3564.90",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 209026,
     "TotalExpenses": 146904,
     "CostofSales": 77799,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 67000,
     "TotalExpenses": 17260,
     "CostofSales": 1000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 89350,
     "TotalExpenses": 18295,
     "CostofSales": 62545,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 88303,
     "TotalExpenses": 30311,
     "CostofSales": 61811,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 125749,
     "TotalExpenses": 51308,
     "CostofSales": 94312,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 302896,
     "TotalExpenses": 52324,
     "CostofSales": 227172,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 195161,
     "TotalExpenses": 51324,
     "CostofSales": 146371,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 16953,
     "TotalExpenses": 3095,
     "CostofSales": 12715,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 16953,
     "TotalExpenses": 3111,
     "CostofSales": 12715,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 16953,
     "TotalExpenses": 3111,
     "CostofSales": 12715,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 477367,
     "TotalExpenses": 521726,
     "CostofSales": 477367,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 495755,
     "TotalExpenses": 387535,
     "CostofSales": 495755,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 466627,
     "TotalExpenses": 741761,
     "CostofSales": 466627,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 1484684,
     "TotalExpenses": 182645,
     "CostofSales": 1336216,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 1336216,
     "TotalExpenses": 182661,
     "CostofSales": 1202594,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 132098,
     "TotalExpenses": 121182,
     "CostofSales": 4348,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 141075,
     "TotalExpenses": 96652,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 171850,
     "TotalExpenses": 144879,
     "CostofSales": 783,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 237072,
     "TotalExpenses": 17743,
     "CostofSales": 165950,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 60543,
     "TotalExpenses": 18111,
     "CostofSales": 42380,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 42321,
     "TotalExpenses": 18111,
     "CostofSales": 29625,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 169292.46,
     "TotalExpenses": 161650,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 169292.46,
     "TotalExpenses": 161650,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3268.08",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3416.49",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 186800,
     "TotalExpenses": 186280,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 186800,
     "TotalExpenses": 186280,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 186800,
     "TotalExpenses": 186280,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3466.47",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 2066886.4,
     "TotalExpenses": 155000,
     "CostofSales": 139041,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3466.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 1832571.4,
     "TotalExpenses": 155000,
     "CostofSales": 139041,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 73293,
     "TotalExpenses": 20611,
     "CostofSales": 51305,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3338.97",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 8000,
     "TotalExpenses": 1000,
     "CostofSales": 850,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 151451.75,
     "TotalExpenses": -157633.79,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 106116,
     "TotalExpenses": 188990,
     "CostofSales": 6471,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 106116,
     "TotalExpenses": 188990,
     "CostofSales": 6471,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 106116,
     "TotalExpenses": 188990,
     "CostofSales": 6471,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 117012,
     "TotalExpenses": 74307,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 434355,
     "TotalExpenses": 278323,
     "CostofSales": 410961,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 669513.11,
     "TotalExpenses": 334756.56,
     "CostofSales": 349403.45,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 1164635.9,
     "TotalExpenses": 313911.65,
     "CostofSales": 465854.36,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 577000,
     "TotalExpenses": 137426,
     "CostofSales": 176752,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 37832,
     "TotalExpenses": 14272,
     "CostofSales": 24870,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1083000,
     "TotalExpenses": 613000,
     "CostofSales": 183000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 33000,
     "TotalExpenses": 76341,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 33000,
     "TotalExpenses": 76341,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 33000,
     "TotalExpenses": 76341,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 93750,
     "TotalExpenses": 99698,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 93750,
     "TotalExpenses": 99698,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 93750,
     "TotalExpenses": 99698,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 459688,
     "TotalExpenses": 291855,
     "CostofSales": 127749,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 41894,
     "TotalExpenses": 16500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 416000,
     "TotalExpenses": 17260,
     "CostofSales": 11800,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 190000,
     "TotalExpenses": 120000,
     "CostofSales": 80000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 37925,
     "TotalExpenses": 32289,
     "CostofSales": 5179,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 761536,
     "TotalExpenses": 194342,
     "CostofSales": 335861,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 303460,
     "TotalExpenses": 55610,
     "CostofSales": 207020,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 194363,
     "TotalExpenses": 184072,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 190000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 126152,
     "TotalExpenses": 146904,
     "CostofSales": 100926,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 400068,
     "TotalExpenses": 282935,
     "CostofSales": 64749,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 527829,
     "TotalExpenses": 422331,
     "CostofSales": 55259,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 130000,
     "TotalExpenses": 2500,
     "CostofSales": 1500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 130000,
     "TotalExpenses": 2500,
     "CostofSales": 1500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 373341,
     "TotalExpenses": 168780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 51811,
     "TotalExpenses": 6750,
     "CostofSales": 3300,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 184410,
     "TotalExpenses": 26251,
     "CostofSales": 105006,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 515263,
     "TotalExpenses": 83971,
     "CostofSales": 239918,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 136292,
     "TotalExpenses": 21915,
     "CostofSales": 87660,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 41310,
     "TotalExpenses": 12563,
     "CostofSales": 8653,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 153000,
     "TotalExpenses": 23633,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 91100,
     "TotalExpenses": 39285,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 299705,
     "TotalExpenses": 24652,
     "CostofSales": 46532,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2397.00",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 373357,
     "TotalExpenses": 66450,
     "CostofSales": 265553,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 257253,
     "TotalExpenses": 66450,
     "CostofSales": 180763,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 208595,
     "TotalExpenses": 202587,
     "CostofSales": 12575.95,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 208595,
     "TotalExpenses": 202587,
     "CostofSales": 12575.95,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 208595,
     "TotalExpenses": 202587,
     "CostofSales": 12575.95,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 153037,
     "TotalExpenses": 139727,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 137229,
     "TotalExpenses": 161008,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 90678,
     "TotalExpenses": 62780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 210246,
     "TotalExpenses": 163942,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 24000,
     "TotalExpenses": 13000,
     "CostofSales": 6000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 48000,
     "TotalExpenses": 12000,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 60000,
     "TotalExpenses": 20000,
     "CostofSales": 12000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 205,
     "TotalExpenses": 80,
     "CostofSales": 100,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1200,
     "TotalExpenses": 600,
     "CostofSales": 700,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 1009897.98,
     "TotalExpenses": 34989,
     "CostofSales": 659382,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 941681,
     "TotalExpenses": 31998,
     "CostofSales": 612093,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 1042564,
     "TotalExpenses": 38780,
     "CostofSales": 729795,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3338.97",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 15000,
     "TotalExpenses": 2000,
     "CostofSales": 1500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 745333,
     "TotalExpenses": 1023378,
     "CostofSales": 454098,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1666455.14,
     "TotalExpenses": 64559,
     "CostofSales": 248849.9,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 782014.01,
     "TotalExpenses": 112466.9,
     "CostofSales": 391007.01,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 52110,
     "TotalExpenses": 32234,
     "CostofSales": 3656,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 39760,
     "TotalExpenses": 17708,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 48983,
     "TotalExpenses": 18600,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3333.36",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 67000,
     "TotalExpenses": 35000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3319.59",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": -1,
     "TotalExpenses": -1,
     "CostofSales": -1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3417.51",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 199451,
     "TotalExpenses": 90215,
     "CostofSales": 1600,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3417.51",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 5000,
     "TotalExpenses": 3000,
     "CostofSales": 2500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 1527062,
     "TotalExpenses": 147795,
     "CostofSales": 1060283,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3268.08",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 2500,
     "CostofSales": 500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.20",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.87",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 36000,
     "TotalExpenses": 700,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3404.76",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 5,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3419.55",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3419.55",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 71901,
     "TotalExpenses": 44797,
     "CostofSales": 3914,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 1020000,
     "TotalExpenses": 638000,
     "CostofSales": 112000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3301.74",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3891.81",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3891.81",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 47000,
     "TotalExpenses": 15000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2321.01",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 432886.89,
     "TotalExpenses": -354821.59,
     "CostofSales": -1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 47381,
     "TotalExpenses": 47292,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 184912,
     "TotalExpenses": 174809,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 184912,
     "TotalExpenses": 174809,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 184912,
     "TotalExpenses": 174809,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 12497.04,
     "TotalExpenses": 46195.81,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 47880.14,
     "TotalExpenses": 46474.12,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 42951.65,
     "TotalExpenses": 52049.41,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 31687.05,
     "TotalExpenses": 44391.49,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 43445.87,
     "TotalExpenses": 40995.63,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3222.69",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 141000,
     "TotalExpenses": 50000,
     "CostofSales": 91000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3299.70",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 50000,
     "TotalExpenses": 70000,
     "CostofSales": 15000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3267.57",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 262000,
     "TotalExpenses": 10000,
     "CostofSales": 55000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 148150,
     "TotalExpenses": 51000,
     "CostofSales": 22000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3311.94",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3311.94",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 35640,
     "TotalExpenses": 7775,
     "CostofSales": 22572,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 135885,
     "TotalExpenses": 102165,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 28521.54,
     "TotalExpenses": 12705,
     "CostofSales": 28521.54,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1466273,
     "TotalExpenses": 567121,
     "CostofSales": 883575,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 314658,
     "TotalExpenses": 217647,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3879.06",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3879.06",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 100000,
     "TotalExpenses": 90000,
     "CostofSales": 80000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 268964,
     "TotalExpenses": 172843,
     "CostofSales": 7044,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 268964,
     "TotalExpenses": 172843,
     "CostofSales": 7044,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 268964,
     "TotalExpenses": 172843,
     "CostofSales": 7044,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 246,
     "TotalExpenses": 745000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 539000,
     "TotalExpenses": 722000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 1982175,
     "TotalExpenses": 734000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 980000,
     "TotalExpenses": 721500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 728000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 72717.76,
     "TotalExpenses": 28000,
     "CostofSales": 34500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.13",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 4150,
     "TotalExpenses": 7850,
     "CostofSales": 270,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.13",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 11750,
     "TotalExpenses": 8500,
     "CostofSales": 340,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.13",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 103500,
     "TotalExpenses": 7920,
     "CostofSales": 71800,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.71",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 5193,
     "TotalExpenses": 35452,
     "CostofSales": 2080,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.71",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 46969,
     "TotalExpenses": 39933,
     "CostofSales": 11500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.71",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 54293,
     "TotalExpenses": 17266,
     "CostofSales": 3000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 517978,
     "TotalExpenses": 340671,
     "CostofSales": 159883,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 139012.5,
     "TotalExpenses": 116461.63,
     "CostofSales": 26529,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 102862.14,
     "TotalExpenses": 93175.43,
     "CostofSales": 10696,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 133068.91,
     "TotalExpenses": 113199.51,
     "CostofSales": 12063,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 113228,
     "TotalExpenses": 130232,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 758000,
     "TotalExpenses": 49260,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 184336,
     "TotalExpenses": 163959,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 889236,
     "TotalExpenses": 494634,
     "CostofSales": 257578,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 118737.02,
     "TotalExpenses": 84313.82,
     "CostofSales": 14380,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 149237.4,
     "TotalExpenses": 100724.75,
     "CostofSales": 10121,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3876.00",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 56676,
     "TotalExpenses": 263482.6,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3876.00",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 197557,
     "TotalExpenses": 287166.69,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 434981.74,
     "TotalExpenses": 289500,
     "CostofSales": 67000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 112500,
     "TotalExpenses": 10000,
     "CostofSales": 68000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 123750,
     "TotalExpenses": 15000,
     "CostofSales": 62000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3214.53",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 41926,
     "TotalExpenses": 14600,
     "CostofSales": 2500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3214.53",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 41926,
     "TotalExpenses": 14500,
     "CostofSales": 25000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 5350,
     "CostofSales": 9650,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 564539,
     "TotalExpenses": 532476,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 564539,
     "TotalExpenses": 532476,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 564539,
     "TotalExpenses": 532476,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 200705,
     "TotalExpenses": 217322,
     "CostofSales": 882891,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 161084,
     "CostofSales": 181481,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3391.50",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 5107,
     "CostofSales": 16500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 115185,
     "TotalExpenses": 20611,
     "CostofSales": 80630,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 579768.84,
     "TotalExpenses": 39023,
     "CostofSales": 245916,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 291186.83,
     "TotalExpenses": 40936,
     "CostofSales": 120652,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3203.82",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 89479.58,
     "TotalExpenses": 34685,
     "CostofSales": 28465.2,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 75708,
     "TotalExpenses": 18355,
     "CostofSales": 52996,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 375050,
     "TotalExpenses": 317520,
     "CostofSales": 31000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 375050,
     "TotalExpenses": 317520,
     "CostofSales": 31000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 456655.48,
     "TotalExpenses": 650049.43,
     "CostofSales": 182662.19,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 492800,
     "TotalExpenses": 427187,
     "CostofSales": 98337,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 492800,
     "TotalExpenses": 427187,
     "CostofSales": 98337,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 464550,
     "TotalExpenses": 410724,
     "CostofSales": 80932,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 464550,
     "TotalExpenses": 410724,
     "CostofSales": 80932,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 632583,
     "TotalExpenses": 63950,
     "CostofSales": 480763,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 989474,
     "TotalExpenses": 358347,
     "CostofSales": 212055,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 273747,
     "TotalExpenses": 319729,
     "CostofSales": 115506,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 238741,
     "TotalExpenses": 158947,
     "CostofSales": 180968,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 394933,
     "TotalExpenses": 205801,
     "CostofSales": 185724,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 645454,
     "TotalExpenses": 388196,
     "CostofSales": 178570,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 202278.32,
     "TotalExpenses": 208091.61,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 202278.32,
     "TotalExpenses": 208091.61,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 80464,
     "TotalExpenses": 97244,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 80464,
     "TotalExpenses": 97244,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 415619.2,
     "TotalExpenses": 143989.63,
     "CostofSales": 206967.95,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 172425,
     "TotalExpenses": 94450,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3879.06",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 100000,
     "TotalExpenses": 69999,
     "CostofSales": 50000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3251.76",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 260000,
     "TotalExpenses": 158500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3347.13",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 9480,
     "TotalExpenses": 2040,
     "CostofSales": 700,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3187.50",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 1,
     "TotalExpenses": 39,
     "CostofSales": 1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 97984,
     "TotalExpenses": 21003,
     "CostofSales": 16551,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 1228.8,
     "TotalExpenses": 700,
     "CostofSales": 600,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3325.71",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 50000,
     "TotalExpenses": 39878,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3190.56",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 1622328,
     "TotalExpenses": 56533,
     "CostofSales": 1198352,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 35000,
     "TotalExpenses": 5000,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3338.97",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 25.73,
     "TotalExpenses": 2500,
     "CostofSales": 3200,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3426.69",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 127728.4,
     "TotalExpenses": 112730.2,
     "CostofSales": 16909.53,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3323.67",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 53481,
     "TotalExpenses": 48254.93,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 16362,
     "TotalExpenses": 36534,
     "CostofSales": 997,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 737803,
     "TotalExpenses": 321846,
     "CostofSales": 182391,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 946000,
     "TotalExpenses": 98000,
     "CostofSales": 721000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 323274,
     "TotalExpenses": 180888,
     "CostofSales": 2062,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 323274,
     "TotalExpenses": 180888,
     "CostofSales": 2062,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 323274,
     "TotalExpenses": 180888,
     "CostofSales": 2062,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 302184,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 82298,
     "TotalExpenses": 62406,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 239785,
     "TotalExpenses": 242870,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 811422,
     "TotalExpenses": 519539,
     "CostofSales": 263606,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 1018806,
     "TotalExpenses": 213602,
     "CostofSales": 701309,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 958229,
     "TotalExpenses": 229058,
     "CostofSales": 466516,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 97525.95,
     "TotalExpenses": 45324.8,
     "CostofSales": 26709,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 108309.86,
     "TotalExpenses": 60526.51,
     "CostofSales": 40157.27,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 821926,
     "TotalExpenses": 72950,
     "CostofSales": 665760,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 86280,
     "TotalExpenses": 44329,
     "CostofSales": 14600,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 113873.22,
     "TotalExpenses": 108063.05,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 308651,
     "TotalExpenses": 162539,
     "CostofSales": 423661,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 930182,
     "TotalExpenses": 170213,
     "CostofSales": 689454,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 75762,
     "TotalExpenses": 21500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 71695,
     "TotalExpenses": 109756,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 80573.33,
     "TotalExpenses": 41730,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 22822.77,
     "TotalExpenses": 30129.4,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 85000,
     "TotalExpenses": 17260,
     "CostofSales": 1000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 190000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 247372,
     "TotalExpenses": 169249,
     "CostofSales": 170728,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 466627,
     "TotalExpenses": 741761,
     "CostofSales": 4666627,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3256.35",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 466627,
     "TotalExpenses": 741761,
     "CostofSales": 466627,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 47413,
     "TotalExpenses": 18180,
     "CostofSales": 33189,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 47413,
     "TotalExpenses": 18180,
     "CostofSales": 17180,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 245237,
     "TotalExpenses": 189929,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3211.47",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 184053,
     "TotalExpenses": 134342,
     "CostofSales": 17392,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 185403,
     "TotalExpenses": 52307,
     "CostofSales": 139052,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3334.38",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 184270,
     "TotalExpenses": 51306,
     "CostofSales": 138202,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 79694,
     "TotalExpenses": 18357,
     "CostofSales": 55785,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 25756,
     "TotalExpenses": 7672,
     "CostofSales": 19317,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3344.07",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 24468,
     "TotalExpenses": 7671,
     "CostofSales": 18351,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 1205935,
     "TotalExpenses": 182688,
     "CostofSales": 1085341,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3400.17",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1269405,
     "TotalExpenses": 182687,
     "CostofSales": 1142464,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 136000,
     "TotalExpenses": 23000,
     "CostofSales": 116000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 220391,
     "TotalExpenses": 287689,
     "CostofSales": 287689,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 863077,
     "TotalExpenses": 566968,
     "CostofSales": 815265,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 557714,
     "TotalExpenses": 480067,
     "CostofSales": 212773,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 276172,
     "TotalExpenses": 285780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 276172,
     "TotalExpenses": 285780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 276172,
     "TotalExpenses": 285780,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 724953,
     "TotalExpenses": 489704,
     "CostofSales": 198894,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 311548.59,
     "TotalExpenses": 153082.39,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 10000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 630654.45,
     "TotalExpenses": 301898.22,
     "CostofSales": 252261.78,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 115729.21,
     "TotalExpenses": 10566.38,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 115729.21,
     "TotalExpenses": 10566.38,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 420319,
     "TotalExpenses": 153658,
     "CostofSales": 241732,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 1118653,
     "TotalExpenses": 443000,
     "CostofSales": 703000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 44600,
     "TotalExpenses": 37067,
     "CostofSales": 24142,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 523753,
     "TotalExpenses": 148565,
     "CostofSales": 313126,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3269.61",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 837640,
     "TotalExpenses": 292269,
     "CostofSales": 210073,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3280.83",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3291.54",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 116403,
     "TotalExpenses": 90809,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 31600,
     "TotalExpenses": 29368,
     "CostofSales": 16394,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 28000,
     "TotalExpenses": 6000,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 28000,
     "TotalExpenses": 6000,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 71167,
     "TotalExpenses": 35384,
     "CostofSales": 30715,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 65100,
     "TotalExpenses": 37964,
     "CostofSales": 33780,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 51667,
     "TotalExpenses": 56059,
     "CostofSales": 43875,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3280.83",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3201.78",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3419.55",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 274000,
     "TotalExpenses": 100000,
     "CostofSales": 74000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 40285.94,
     "TotalExpenses": 10500,
     "CostofSales": 17500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 1100000,
     "TotalExpenses": 46522,
     "CostofSales": 678900,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3215.55",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 606184,
     "TotalExpenses": 409000,
     "CostofSales": 70000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 606184,
     "TotalExpenses": 409000,
     "CostofSales": 70000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 385064,
     "TotalExpenses": 203125,
     "CostofSales": 6367,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 385064,
     "TotalExpenses": 203125,
     "CostofSales": 6367,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 385064,
     "TotalExpenses": 203125,
     "CostofSales": 6367,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 630800,
     "TotalExpenses": 438803,
     "CostofSales": 222759,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 250000,
     "TotalExpenses": 70000,
     "CostofSales": 60000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 50000,
     "CostofSales": 120000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 40953,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 500,
     "TotalExpenses": 24242,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 123192,
     "TotalExpenses": 116115,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 273617,
     "TotalExpenses": 193085,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 616495,
     "TotalExpenses": 175466,
     "CostofSales": 764142,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 755317,
     "TotalExpenses": 299301,
     "CostofSales": 269420,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 386254,
     "TotalExpenses": 381003,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 16362,
     "TotalExpenses": 4867,
     "CostofSales": 1000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 342256,
     "TotalExpenses": 71950,
     "CostofSales": 260114,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 600000,
     "TotalExpenses": 17260,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 60000,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 60000,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 60000,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 139000,
     "TotalExpenses": 2350,
     "CostofSales": 112000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 157205,
     "TotalExpenses": 96535.73,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 54534.75,
     "TotalExpenses": 101617.32,
     "CostofSales": 56358.1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 335738,
     "TotalExpenses": 367868,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 335738,
     "TotalExpenses": 367868,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 335738,
     "TotalExpenses": 367868,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 227738,
     "TotalExpenses": 112778,
     "CostofSales": 55200,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3268.08",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 1500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 162923,
     "TotalExpenses": 78672,
     "CostofSales": 40541,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 1220000,
     "TotalExpenses": 459641,
     "CostofSales": 172459,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 1220000,
     "TotalExpenses": 459641,
     "CostofSales": 172459,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 203260,
     "TotalExpenses": 182194.89,
     "CostofSales": 95645,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3310.92",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 2256.3,
     "TotalExpenses": 1000,
     "CostofSales": 1069,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 383980,
     "TotalExpenses": 257861,
     "CostofSales": 48956,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 1212212,
     "TotalExpenses": 490596,
     "CostofSales": 484157,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 205000,
     "TotalExpenses": 132257.61,
     "CostofSales": 71735,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 205000,
     "TotalExpenses": 132257.61,
     "CostofSales": 71735,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 430557.79,
     "TotalExpenses": 133944.03,
     "CostofSales": 170184.32,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 430557.79,
     "TotalExpenses": 133944.03,
     "CostofSales": 170184.32,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 187417,
     "TotalExpenses": 123118.2,
     "CostofSales": 66963,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 187417,
     "TotalExpenses": 123118.2,
     "CostofSales": 66963,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 197312,
     "TotalExpenses": 94855.5,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 2378521,
     "TotalExpenses": 406000,
     "CostofSales": 1711046,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 481998.29,
     "TotalExpenses": 230463.21,
     "CostofSales": 241632.89,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 222011.05,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 250320,
     "TotalExpenses": 23200,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 1,
     "YearID": 2023,
     "TotalIncome": 250320,
     "TotalExpenses": 23200,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 232020,
     "TotalExpenses": 12000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3373.14",
     "MonthID": 2,
     "YearID": 2023,
     "TotalIncome": 232020,
     "TotalExpenses": 12000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 904210,
     "TotalExpenses": 217193,
     "CostofSales": 147288,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 1410898,
     "TotalExpenses": 213516,
     "CostofSales": 155463,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 430948,
     "TotalExpenses": 245865,
     "CostofSales": 503515,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 378621,
     "TotalExpenses": 174416,
     "CostofSales": 198542,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 479972,
     "TotalExpenses": 462097,
     "CostofSales": 197118,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 586271,
     "TotalExpenses": 164627,
     "CostofSales": 581186,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3382.32",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 126939,
     "TotalExpenses": 80673.66,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 100000,
     "CostofSales": 40000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 260962,
     "TotalExpenses": 322412,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 239614,
     "TotalExpenses": 213503,
     "CostofSales": 13773.19,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 239614,
     "TotalExpenses": 213503,
     "CostofSales": 13773.19,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 239614,
     "TotalExpenses": 213503,
     "CostofSales": 13773.19,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 12975,
     "TotalExpenses": 15137,
     "CostofSales": 6058,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 117131,
     "TotalExpenses": 84762,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 804000,
     "TotalExpenses": 443030,
     "CostofSales": 320231,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3673.02",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 1013917,
     "TotalExpenses": 71950,
     "CostofSales": 842432,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 249107,
     "TotalExpenses": 199189,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 328838,
     "TotalExpenses": 191061,
     "CostofSales": 167911,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 8132.05,
     "TotalExpenses": 26593.54,
     "CostofSales": 4200,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 153317,
     "TotalExpenses": 197501,
     "CostofSales": 331476,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 173000,
     "TotalExpenses": 58000,
     "CostofSales": 51000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 204366,
     "TotalExpenses": 33962,
     "CostofSales": 111296,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 16886.94,
     "TotalExpenses": 95426.07,
     "CostofSales": 32546.74,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 278168,
     "TotalExpenses": 188095,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 278168,
     "TotalExpenses": 188095,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 278168,
     "TotalExpenses": 188095,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 82500,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 82500,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 82500,
     "TotalExpenses": 57000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 9000,
     "TotalExpenses": 23511.69,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 474584.06,
     "TotalExpenses": 150577.78,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 110054,
     "TotalExpenses": 38000,
     "CostofSales": 29000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 41310,
     "TotalExpenses": 45000,
     "CostofSales": 160000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 518079,
     "TotalExpenses": 158043,
     "CostofSales": 322414,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 190892,
     "TotalExpenses": 122932,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 190892,
     "TotalExpenses": 122932,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 41100,
     "TotalExpenses": 32953,
     "CostofSales": 18130,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 507686,
     "TotalExpenses": 148410.58,
     "CostofSales": 193147,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 507686,
     "TotalExpenses": 148410.58,
     "CostofSales": 193147,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 378993.01,
     "TotalExpenses": 208614.25,
     "CostofSales": 153969.59,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 1097000,
     "TotalExpenses": 628900,
     "CostofSales": 101000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 400000,
     "TotalExpenses": 747360,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3879.06",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 3,
     "TotalExpenses": 2,
     "CostofSales": 2,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 344584,
     "TotalExpenses": 255521,
     "CostofSales": 192409,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 712000,
     "TotalExpenses": 558953,
     "CostofSales": 277796,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 249557.83,
     "TotalExpenses": 119148.52,
     "CostofSales": 122572.92,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 249557.83,
     "TotalExpenses": 119148.52,
     "CostofSales": 122572.92,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 510000,
     "TotalExpenses": 450000,
     "CostofSales": 200000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 510000,
     "TotalExpenses": 450000,
     "CostofSales": 200000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206897.99,
     "TotalExpenses": 195000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3326.22",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 36700,
     "TotalExpenses": 32100,
     "CostofSales": 16200,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 179539,
     "TotalExpenses": 152049,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3213.00",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 178060,
     "TotalExpenses": 80000,
     "CostofSales": 8,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 997577.55,
     "TotalExpenses": 450085.1,
     "CostofSales": 448909.9,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 997577.55,
     "TotalExpenses": 450085.1,
     "CostofSales": 448909.9,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 36296,
     "TotalExpenses": 5000,
     "CostofSales": 29000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 83967.56,
     "TotalExpenses": 14000,
     "CostofSales": 67175.5,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 240299,
     "TotalExpenses": 50000,
     "CostofSales": 173015,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 404550,
     "TotalExpenses": 404211.87,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 404550,
     "TotalExpenses": 404211.87,
     "CostofSales": 10000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 38618,
     "TotalExpenses": 28471.21,
     "CostofSales": 11100,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 38618,
     "TotalExpenses": 28471.21,
     "CostofSales": 11100,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 10000,
     "TotalExpenses": 48514.21,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 10000,
     "TotalExpenses": 48514.21,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 71378,
     "TotalExpenses": 29902.23,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 71378,
     "TotalExpenses": 29902.23,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 65000,
     "TotalExpenses": 18000,
     "CostofSales": 40000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 6700,
     "TotalExpenses": 12000,
     "CostofSales": 36000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 211000,
     "TotalExpenses": 28000,
     "CostofSales": 180000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 119500,
     "TotalExpenses": 38000,
     "CostofSales": 92000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 213000,
     "TotalExpenses": 32000,
     "CostofSales": 158000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 206600,
     "TotalExpenses": 28000,
     "CostofSales": 168000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 321852,
     "TotalExpenses": 167833,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 321852,
     "TotalExpenses": 167833,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 284790.3,
     "TotalExpenses": 93670.97,
     "CostofSales": 75000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 16000,
     "TotalExpenses": 106005.91,
     "CostofSales": 75000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 282410,
     "TotalExpenses": 63515.01,
     "CostofSales": 60000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3376.71",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 1888000,
     "TotalExpenses": 423000,
     "CostofSales": 1261000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 1482575,
     "TotalExpenses": 271351,
     "CostofSales": 790116,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 168482,
     "TotalExpenses": 96522,
     "CostofSales": 11026,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 168482,
     "TotalExpenses": 96522,
     "CostofSales": 11026,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 168482,
     "TotalExpenses": 96522,
     "CostofSales": 11026,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 263552,
     "TotalExpenses": 178543,
     "CostofSales": 130386,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 124814,
     "TotalExpenses": 106107,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 326830.99,
     "TotalExpenses": 261922.11,
     "CostofSales": 1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 326830.99,
     "TotalExpenses": 261922.11,
     "CostofSales": 1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 281878,
     "TotalExpenses": 176638,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 24695.63,
     "TotalExpenses": 98948.26,
     "CostofSales": 23186,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 148000,
     "TotalExpenses": 85000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 148000,
     "TotalExpenses": 85000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 148000,
     "TotalExpenses": 85000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 475887,
     "TotalExpenses": 422933,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 475887,
     "TotalExpenses": 422933,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 165886,
     "TotalExpenses": 75000,
     "CostofSales": 45000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 185395,
     "TotalExpenses": 212144,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3180.36",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 10000,
     "CostofSales": 4500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3164.55",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3330.30",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 220830,
     "TotalExpenses": 128125,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 100000,
     "CostofSales": 100000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 161000,
     "TotalExpenses": 45000,
     "CostofSales": 85000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 272000,
     "TotalExpenses": 75000,
     "CostofSales": 145000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 12975,
     "TotalExpenses": 15137,
     "CostofSales": 6058,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3195.15",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 264000,
     "TotalExpenses": 80000,
     "CostofSales": 130000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 843926,
     "TotalExpenses": 503756,
     "CostofSales": 308060,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 437841,
     "TotalExpenses": 199861,
     "CostofSales": 50625,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.51",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 533656,
     "TotalExpenses": 400941,
     "CostofSales": 63931,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 157519,
     "TotalExpenses": 87769,
     "CostofSales": 8040,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 627894.91,
     "TotalExpenses": 219041.28,
     "CostofSales": 210416,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 1081810,
     "TotalExpenses": 365695,
     "CostofSales": 488026,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 1016000,
     "TotalExpenses": 813000,
     "CostofSales": 16000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 31025,
     "TotalExpenses": 180806,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 366630,
     "TotalExpenses": 120563,
     "CostofSales": 143088,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 266662,
     "TotalExpenses": 30000,
     "CostofSales": 216666,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 350844,
     "TotalExpenses": 402857,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 350844,
     "TotalExpenses": 402857,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 350844,
     "TotalExpenses": 402857,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 224708,
     "TotalExpenses": 9910,
     "CostofSales": 67797,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 806659,
     "TotalExpenses": 257215,
     "CostofSales": 71860,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 328715,
     "TotalExpenses": 189669,
     "CostofSales": 156768,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 347467,
     "TotalExpenses": 174934,
     "CostofSales": 150159,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 47100,
     "TotalExpenses": 49121,
     "CostofSales": 14816,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 2300,
     "TotalExpenses": 2207,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 2300,
     "TotalExpenses": 2207,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 630595,
     "TotalExpenses": 187605,
     "CostofSales": 202835,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3326.22",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 86010,
     "TotalExpenses": 18250,
     "CostofSales": 12500,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 297587,
     "TotalExpenses": 351262,
     "CostofSales": 9161,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 297587,
     "TotalExpenses": 351262,
     "CostofSales": 9161,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 297587,
     "TotalExpenses": 351262,
     "CostofSales": 9161,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 472855,
     "TotalExpenses": 245000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 472855,
     "TotalExpenses": 245000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 472855,
     "TotalExpenses": 245000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2241.96",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 186606,
     "TotalExpenses": 212702,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 96786.46,
     "TotalExpenses": 49361,
     "CostofSales": 21293,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3266.55",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3319.08",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 371713,
     "TotalExpenses": 221262,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 371713,
     "TotalExpenses": 221262,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 371713,
     "TotalExpenses": 221262,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 77700,
     "TotalExpenses": 25000,
     "CostofSales": 60000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 883300,
     "TotalExpenses": 185800,
     "CostofSales": 600000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 2013166,
     "TotalExpenses": 452315,
     "CostofSales": 1312698,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 408166,
     "TotalExpenses": 107665,
     "CostofSales": 245272,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 4,
     "YearID": 2023,
     "TotalIncome": 102070,
     "TotalExpenses": 35268,
     "CostofSales": 11922,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 5,
     "YearID": 2023,
     "TotalIncome": 50729,
     "TotalExpenses": 46656,
     "CostofSales": 9187,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 6,
     "YearID": 2023,
     "TotalIncome": 90227,
     "TotalExpenses": 34736,
     "CostofSales": 12599,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 256200,
     "TotalExpenses": 14134,
     "CostofSales": 104117,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 113454,
     "TotalExpenses": 40384,
     "CostofSales": 4559,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 591127,
     "TotalExpenses": 328942,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 591127,
     "TotalExpenses": 328942,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3304.80",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 570240,
     "TotalExpenses": 330500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 859703,
     "TotalExpenses": 178310,
     "CostofSales": 439553,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 72160,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 159660,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 359738,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 269294,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 165000,
     "TotalExpenses": 101000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 266000,
     "TotalExpenses": 166000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 1300000,
     "TotalExpenses": 718000,
     "CostofSales": 68900,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 397000,
     "TotalExpenses": 224000,
     "CostofSales": 35000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 397000,
     "TotalExpenses": 224000,
     "CostofSales": 35000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 383000,
     "TotalExpenses": 250000,
     "CostofSales": 42000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 383000,
     "TotalExpenses": 250000,
     "CostofSales": 42000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 696679,
     "TotalExpenses": 245316,
     "CostofSales": 376867,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 664500,
     "TotalExpenses": 556110,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 664500,
     "TotalExpenses": 556110,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3508.29",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 176000,
     "TotalExpenses": 110000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 24835,
     "TotalExpenses": 16145,
     "CostofSales": 248,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 24835,
     "TotalExpenses": 16145,
     "CostofSales": 248,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 147901.02,
     "TotalExpenses": 103850.59,
     "CostofSales": 26693.61,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 1825001,
     "TotalExpenses": 404000,
     "CostofSales": 1151000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 201000,
     "TotalExpenses": 30000,
     "CostofSales": 171000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 2700000,
     "TotalExpenses": 1450000,
     "CostofSales": 175000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 267878,
     "TotalExpenses": 247812,
     "CostofSales": 10846,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 267878,
     "TotalExpenses": 247812,
     "CostofSales": 10846,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 267878,
     "TotalExpenses": 247812,
     "CostofSales": 10846,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 156500,
     "TotalExpenses": 179940.81,
     "CostofSales": 120000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3264.00",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 52962.41,
     "TotalExpenses": 158111.75,
     "CostofSales": 100000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 492899.28,
     "TotalExpenses": 449397.05,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3192.09",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 1260786.19,
     "TotalExpenses": 415288.46,
     "CostofSales": 390843.72,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3297.15",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 277830.3,
     "TotalExpenses": 99262.45,
     "CostofSales": 143112.95,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 563369,
     "TotalExpenses": 471328,
     "CostofSales": 171351,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 704805,
     "TotalExpenses": 502281,
     "CostofSales": 384943,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 129672.63,
     "TotalExpenses": 84762.19,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 129672.63,
     "TotalExpenses": 84762.19,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 481545.82,
     "TotalExpenses": 195497.64,
     "CostofSales": 74043.31,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 411546.28,
     "TotalExpenses": 251879.3,
     "CostofSales": 112444.78,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 1429383,
     "TotalExpenses": 370005,
     "CostofSales": 409070,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 867000,
     "TotalExpenses": 339716,
     "CostofSales": 338461,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 444504.98,
     "TotalExpenses": 94035.72,
     "CostofSales": 181542.51,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 43300,
     "TotalExpenses": 1684,
     "CostofSales": 20825,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 121600,
     "TotalExpenses": 94443,
     "CostofSales": 328144,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 140000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 48050,
     "TotalExpenses": 361,
     "CostofSales": 5050,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 388203,
     "TotalExpenses": 190302,
     "CostofSales": 90754,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3271.14",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 200000,
     "TotalExpenses": 140000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 124809,
     "TotalExpenses": 70000,
     "CostofSales": 60000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 440,
     "CostofSales": 4359,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 721820.11,
     "TotalExpenses": 354414.18,
     "CostofSales": 280711.34,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 248991,
     "TotalExpenses": 157182,
     "CostofSales": 218275,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 640117.61,
     "TotalExpenses": 245249.31,
     "CostofSales": 213193.7,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 303905,
     "TotalExpenses": 218068,
     "CostofSales": 174660,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 463147,
     "TotalExpenses": 146213,
     "CostofSales": 199449,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 677468,
     "CostofSales": 3564,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 70000,
     "TotalExpenses": 17885,
     "CostofSales": 25600,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 628000,
     "TotalExpenses": 580000,
     "CostofSales": 15000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 628000,
     "TotalExpenses": 580000,
     "CostofSales": 15000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 526686,
     "TotalExpenses": 131874,
     "CostofSales": 340681,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3175.77",
     "MonthID": 9,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3175.77",
     "MonthID": 7,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3175.77",
     "MonthID": 8,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3175.77",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 1,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 696679.06,
     "TotalExpenses": 245316.12,
     "CostofSales": 216652.94,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 450000,
     "TotalExpenses": 234000,
     "CostofSales": 200000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3254.31",
     "MonthID": 1,
     "YearID": 2000,
     "TotalIncome": 0,
     "TotalExpenses": "NULL",
     "CostofSales": "NULL",
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 90000,
     "TotalExpenses": 17260,
     "CostofSales": 9000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 211774.77,
     "TotalExpenses": 192000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 23752.68,
     "TotalExpenses": 136786.52,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 214651.03,
     "TotalExpenses": 111216.24,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 312790,
     "TotalExpenses": 193959,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 279055,
     "TotalExpenses": 208785,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 8413,
     "CostofSales": 440,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 844085,
     "TotalExpenses": 69406.2,
     "CostofSales": 251447.08,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 26314,
     "TotalExpenses": 15000,
     "CostofSales": 19000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3675.06",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 3631000,
     "TotalExpenses": 2900000,
     "CostofSales": 731000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 176291,
     "TotalExpenses": 273810,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 190679,
     "TotalExpenses": 219019,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 659000,
     "TotalExpenses": 100000,
     "CostofSales": 209000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.98",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 659000,
     "TotalExpenses": 100000,
     "CostofSales": 209000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 20000,
     "TotalExpenses": 90000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 20000,
     "TotalExpenses": 90000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 20000,
     "TotalExpenses": 90000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 11,
     "YearID": 2023,
     "TotalIncome": 126951,
     "TotalExpenses": 75645,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 79682,
     "TotalExpenses": 105041,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 297854,
     "TotalExpenses": 14578,
     "CostofSales": 109495,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 323419,
     "TotalExpenses": 601934,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 323419,
     "TotalExpenses": 601934,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 12,
     "YearID": 2023,
     "TotalIncome": 323419,
     "TotalExpenses": 601934,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 219534,
     "TotalExpenses": 295676.54,
     "CostofSales": 3367.2,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 219534,
     "TotalExpenses": 295676.54,
     "CostofSales": 3367.2,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 219534,
     "TotalExpenses": 295676.54,
     "CostofSales": 3367.2,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 745503,
     "TotalExpenses": 473326,
     "CostofSales": 116482,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 745503,
     "TotalExpenses": 473326,
     "CostofSales": 116482,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3841.32",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 1600000,
     "TotalExpenses": 11700,
     "CostofSales": 879000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 153605.97,
     "TotalExpenses": 110633.4,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2634.66",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 153605.97,
     "TotalExpenses": 110633.4,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 2798,
     "CostofSales": 439,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3718.92",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 424782,
     "TotalExpenses": 439929,
     "CostofSales": 106229,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 86926.48,
     "TotalExpenses": 53894,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 260825,
     "TotalExpenses": 198000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3720.45",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 15000,
     "TotalExpenses": 25000,
     "CostofSales": 30000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 48080,
     "TotalExpenses": 48000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.81",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 206231.13,
     "TotalExpenses": 111790.4,
     "CostofSales": 312708.8,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3672.51",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 448087.84,
     "TotalExpenses": 235222.27,
     "CostofSales": 198347.28,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 165000,
     "TotalExpenses": 100000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 165000,
     "TotalExpenses": 100000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3840.30",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 165000,
     "TotalExpenses": 100000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3806.64",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 384219,
     "TotalExpenses": 103019,
     "CostofSales": 208578,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.55",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 314327.3,
     "TotalExpenses": 256650,
     "CostofSales": 12000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3738.30",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 103226.8,
     "TotalExpenses": 98653.08,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3729.12",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 2093000,
     "TotalExpenses": 493000,
     "CostofSales": 1484000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3266.55",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 500,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3695.97",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": -877,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3200.25",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 64163.49,
     "TotalExpenses": 35765.34,
     "CostofSales": 34212.54,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 374419,
     "TotalExpenses": 158936.34,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 374419,
     "TotalExpenses": 158936.34,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 374419,
     "TotalExpenses": 158936.34,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3678.63",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 276858,
     "TotalExpenses": 242757,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3391.50",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 4222.05,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 14000,
     "TotalExpenses": 6000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3188.01",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 14000,
     "TotalExpenses": 6000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3176.79",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 3948.78,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3322.65",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 109381.94,
     "TotalExpenses": 19535.58,
     "CostofSales": 65444.46,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3215.55",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 6000,
     "TotalExpenses": 1500,
     "CostofSales": 1000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3697.50",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 66534,
     "TotalExpenses": 0,
     "CostofSales": 12120,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3268.08",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3539.91",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 1948630,
     "TotalExpenses": 250492,
     "CostofSales": 2037824,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3791.85",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 30000,
     "TotalExpenses": 16000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3403.23",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 125507,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3196.68",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 2000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3834.18",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 1246315.76,
     "TotalExpenses": 252498.83,
     "CostofSales": 301349.36,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3416.49",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 60,
     "TotalExpenses": 5,
     "CostofSales": 20,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3752.58",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 924000,
     "TotalExpenses": 425353,
     "CostofSales": 561002,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3427.20",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 3100,
     "TotalExpenses": 400,
     "CostofSales": 800,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 100000,
     "TotalExpenses": 90000,
     "CostofSales": 30000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3309.90",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 0,
     "TotalExpenses": 0,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3219.63",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 125722,
     "TotalExpenses": 32000,
     "CostofSales": 17301,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3257.37",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 268000,
     "TotalExpenses": 139000,
     "CostofSales": 150000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3692.40",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 98943.82,
     "TotalExpenses": 71011.09,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3196.68",
     "MonthID": 10,
     "YearID": 2023,
     "TotalIncome": 0,
     "TotalExpenses": 2000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 70248,
     "TotalExpenses": 218508,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 70248,
     "TotalExpenses": 218508,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3852.03",
     "MonthID": 3,
     "YearID": 2023,
     "TotalIncome": 70248,
     "TotalExpenses": 218508,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3878.04",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 136560.78,
     "TotalExpenses": 20000,
     "CostofSales": 130000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3874.47",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 196501,
     "TotalExpenses": 160000,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 234213,
     "TotalExpenses": 565,
     "CostofSales": 130911,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 200000,
     "TotalExpenses": 150000,
     "CostofSales": 50000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3807.15",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 206443,
     "TotalExpenses": 110000,
     "CostofSales": 65000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3676.08",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 5750,
     "TotalExpenses": 843,
     "CostofSales": 444,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3704.64",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 200000,
     "TotalExpenses": 140000,
     "CostofSales": 100000,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3844.89",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 335510,
     "TotalExpenses": 173632,
     "CostofSales": 206423,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 465708.71,
     "TotalExpenses": 272.42,
     "CostofSales": 1.96,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 465708.71,
     "TotalExpenses": 272.42,
     "CostofSales": 1.96,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_2298.06",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 465708.71,
     "TotalExpenses": 272.42,
     "CostofSales": 1.96,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.63",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 75969.53,
     "TotalExpenses": 35901.67,
     "CostofSales": 0,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 1499450,
     "TotalExpenses": 366000,
     "CostofSales": 376375,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3831.12",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 1499450,
     "TotalExpenses": 366000,
     "CostofSales": 376375,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 39384.45,
     "TotalExpenses": 73.54,
     "CostofSales": 73.54,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3721.47",
     "MonthID": 1,
     "YearID": 2024,
     "TotalIncome": 39384.45,
     "TotalExpenses": 73.54,
     "CostofSales": 73.54,
     "IgnoreException": 0
    },
    {
     "CompanyName": "Company_3699.03",
     "MonthID": 2,
     "YearID": 2024,
     "TotalIncome": 100513,
     "TotalExpenses": 100000,
     "CostofSales": 0,
     "IgnoreException": 0
    }
  ];

  ngOnInit(): void {
    this.processData();
  }

  processData() {
    // Remove duplicates using reduced
    const uniqueData = this.getUniqueRecords(this.sourceData);

    // Filter data for the past 12 months
    this.filteredData = this.getFilteredData(uniqueData);

    // Process data to calculate profit and percentage change
    const handleMapDataBaseOnCompanyName: any = this.hanldeCreateUniqueSetOfCompanyName(this.filteredData);
    const processedObject: any = {};

    for (const key in handleMapDataBaseOnCompanyName) {
      const element = handleMapDataBaseOnCompanyName[key];
      const handleData = element.map((item: any, index: number, arr: any[]) => {
        const previousItem = arr[index - 1];
        const profit = item.TotalIncome - item.TotalExpenses;

        //get percentageChange from previous Income and current Income
        const percentageChange = previousItem && previousItem.TotalIncome !== 0
          ? ((item.TotalIncome - previousItem.TotalIncome) / previousItem.TotalIncome) * 100
          : 0;

        // handle add tooltip for each item
        let tooltip = '';
        if (previousItem) {
          if (item.TotalIncome > 3 * previousItem.TotalIncome) {
            tooltip = 'Revenue Surge';
          } else if (profit < previousItem.TotalIncome - previousItem.TotalExpenses) {
            tooltip = 'Extreme Profit Drop';
          } else if (item.TotalIncome === previousItem.TotalIncome && item.TotalExpenses === previousItem.TotalExpenses) {
            tooltip = 'Identical Income and Expenses';
          }
        }

        return {
          ...item,
          Profit: profit,
          PercentageChange: percentageChange,
          Tooltip: tooltip,
          previousIncome: previousItem ? previousItem.TotalIncome : 0
        };
      });

      processedObject[key] = handleData;
    }

    // Transform data for display
    this.dataSource = this.transformDataForDisplay(processedObject);

    // Prepare column headers dynamically
    this.monthHeaders = this.getMonths();
    this.displayedColumns = ['CompanyName', ...this.monthHeaders];
  }

  transformDataForDisplay(processedObject: any) {
    const displayData: any[] = [];

    const companyNames = Array.from(new Set(this.filteredData.map(d => d.CompanyName)));
    const months = Array.from(new Set(this.filteredData.map(d => `${d.MonthID}-${d.YearID}`)));

    companyNames.forEach(companyName => {
      const row: any = { CompanyName: companyName };
      months.forEach(month => {
        const entry = processedObject[companyName].find((d: any) => `${d.MonthID}-${d.YearID}` === month);

        if (entry) {
          row[`Income_${month}`] = entry.TotalIncome;
          row[`Profit_${month}`] = entry.Profit?.toFixed(2);
          row[`Change_${month}`] = `${entry.PercentageChange?.toFixed(2)}%`;
          row[`Tooltip_${month}`] = entry.Tooltip;
          row[`PreviousIncome_${month}`] = entry.previousIncome;
        } else {
          row[`Income_${month}`] = 'N/A';
          row[`Profit_${month}`] = 'N/A';
          row[`Change_${month}`] = 'N/A';
          row[`Tooltip_${month}`] = '';
          row[`PreviousIncome_${month}`] = 'N/A';
        }
      });
      displayData.push(row);
    });

    return displayData;
  }

  getMonths() {
    // remove month that not include in the lastest 12 months
    const now = new Date();
    const last12Months = new Date(now.setMonth(now.getMonth() - 12));

    return Array.from(new Set(this.sourceData.filter((item: any) =>
      new Date(item.YearID, item.MonthID - 1) >= last12Months
    ).map(d => `${d.MonthID}-${d.YearID}`)));
  }

  hanldeCreateUniqueSetOfCompanyName(filteredData: any) {
    const returnObject: any = {}
    const uniqueObject = this.groupByCompany(filteredData);

    //sort data by month + year for each company
    for (const key in uniqueObject) {
      const element = uniqueObject[key];
      const sortElement =  this.sortArrayByKey(element, 'monthYear');
      returnObject[key] = sortElement;
    }

    return returnObject;
  }

  private groupByCompany(data: any[]): {
    [key: string]: any[];
  } {
    const companyMap: any= {};

    data.forEach((item: any) => {
      if(companyMap[item.CompanyName]) {
        companyMap[item.CompanyName].push(item);
      }else {
        companyMap[item.CompanyName] = [item];
      }
    });

    return companyMap;
  }

  private getUniqueRecords(data: any[]): any[] {
    return data.reduce((acc: any[], current: any) => {
      const key = `${current.CompanyName}-${current.MonthID}-${current.YearID}`;
      if (
        !acc.some(
          (item) => `${item.CompanyName}-${item.MonthID}-${item.YearID}` === key
        )
      ) {
        acc.push(current);
      }
      return acc;
    }, []);
  }

  private getFilteredData(data: any[]): any[] {
    const last12Months = new Date(Date.now());
    last12Months.setMonth(last12Months.getMonth() - 12);

    return data
      .filter((item) => new Date(item.YearID, item.MonthID - 1) >= last12Months)
      .map((item) => ({
        ...item,
        monthYear: new Date(item.YearID, item.MonthID - 1).getTime(),
      }));
  }

  private sortArrayByKey(array: { [key: string]: any }[], key: string): { [key: string]: any }[] {
    return array.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }
}
