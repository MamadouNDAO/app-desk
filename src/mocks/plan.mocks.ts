import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class PlansMocks {
 
    public plans = [
        {
            id: "157942-8972-87469-9824",
            name: "atm",
            label: "Atm",
            icon: "cash"
        },
        {
            id: "157942-8972-87469-9824",
            name: "bank",
            label: "Banque",
            icon: "wallet"
        },
        {
            id: "157942-8972-87469-9824",
            name: "bar",
            label: "Bar",
            icon: "beer"
        },
        {
            id: "157942-8972-87469-9824",
            name: "library",
            label: "Bibliothèque",
            icon: "book"
        },
        {
            id: "157942-8972-87469-9824",
            name: "cafe",
            label: "Café",
            icon: "cafe"
        },
        {
            id: "157942-8972-87469-9824",
            name: "doctor",
            label: "Docteur",
            icon: "medkit"
        },
        {
            id: "157942-8972-87469-9824",
            name: "gym",
            label: "Gymnase",
            icon: "barbell"
        },
        {
            id: "157942-8972-87469-9824",
            name: "lodging",
            label: "Hébergement",
            icon: "bed"
        },
        {
            id: "157942-8972-87469-9824",
            name: "hospital",
            label: "Hôpital",
            icon: "fitness"
        },
        {
            id: "157942-8972-87469-9824",
            name: "park",
            label: "Parc",
            icon: "leaf"
        },
        {
            id: "157942-8972-87469-9824",
            name: "parking",
            label: "Parking",
            icon: "car-sport"
        },
        {
            id: "157942-8972-87469-9824",
            name: "pharmacy",
            label: "Pharmacie",
            icon: "bandage"
        },
        {
            id: "157942-8972-87469-9824",
            name: "restaurant",
            label: "Restaurant",
            icon: "fast-food"
        },
        {
            id: "157942-8972-87469-9824",
            name: "bus_station",
            label: "Station de bus",
            icon: "bus"
        },
        {
            id: "157942-8972-87469-9824",
            name: "subway_station",
            label: "Station de métro",
            icon: "subway"
        },
        {
            id: "157942-8972-87469-9824",
            name: "train_station",
            label: "Station de train",
            icon: "train"
        },
        {
            id: "157942-8972-87469-9824",
            name: "supermarket",
            label: "Supermarché",
            icon: "cart"
        }
    ];

    public getPLans() {
        return this.plans;
    }
}