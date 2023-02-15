import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
@Injectable({
  providedIn: "root",
})
export class InMemoryDatabaseService implements InMemoryDbService {
  constructor() {}

  createDb(): {} {
    const products = [
      {
        id: 1,
        name: "Мясная Делюкс",
        composition: "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы",
        image: "assets/images/product__item1.png",
      },
      {
        id: 2,
        name: "Морская Премиум",
        composition: "Перец, сыр, креветки, кальмары, мидии, лосось",
        image: "assets/images/product__item2.png",
      },
      {
        id: 3,
        name: "Бекон и Сосиски",
        composition: "Бекон, сыр, сосиски, ананас, томатная паста",
        image: "assets/images/product__item3.png",
      },
      {
        id: 4,
        name: "Куриная Делюкс",
        composition: "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста",
        image: "assets/images/product__item4.png",
      },
      {
        id: 5,
        name: "Барбекю Премиум",
        composition: "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили",
        image: "assets/images/product__item5.png",
      },
      {
        id: 6,
        name: "Пепперони Дабл",
        composition: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная",
        image: "assets/images/product__item6.png",
      },
      {
        id: 7,
        name: "Куриное трио",
        composition: "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы",
        image: "assets/images/product__item7.png",
      },
      {
        id: 8,
        name: "Сырная",
        composition: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный",
        image: "assets/images/product__item8.png",
      },
    ];
    return { products };
  }
}
