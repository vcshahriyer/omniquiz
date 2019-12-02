import http from "./httpService";

export function getCategory() {
  return http.get("https://opentdb.com/api_category.php");
}
