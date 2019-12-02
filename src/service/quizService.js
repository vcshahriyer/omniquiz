import http from "./httpService";

export function getCategory() {
  return http.get("https://opentdb.com/api_category.php");
}

export function getQuestions(id) {
  return http.get(
    `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`
  );
}
