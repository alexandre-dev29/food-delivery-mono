import http from 'k6/http';

const query = `
{
  recipes {
    id
    description
    ingredients
  }
}
`;

const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJwaG9uZU51bWJlciI6IisyNDM5NzUzNDQ4MjQiLCJ1c2VyUm9sZSI6IlVzZXIiLCJhdXRoVXNlcklkIjoiY2w5bnpsN3ptMDAwM2hhY2d4ZjIxbmJ2NiIsInVzZXJJZCI6IiIsImlhdCI6MTY2NjY5NDQyNiwiZXhwIjoxNjY2Njk1MzI2fQ.77RXxbhXZHykRks9ULecbTf8uEhDp1uiELyYvceQxNg',
};

export default function () {
  http.post('http://localhost:3333/graphql', JSON.stringify({ query }), {
    headers,
  });
}
