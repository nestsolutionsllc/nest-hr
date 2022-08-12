type MethodType = "GET" | "POST" | "PATCH";

const fetchTicket = async (url: string, method: MethodType, body?: object): Promise<any> => {
  const res = await (
    await fetch(url, {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    })
  ).json();
  return res;
};

export default fetchTicket;
