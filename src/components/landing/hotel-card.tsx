export default function HotelCard() {
  return (
    <div className="w-75 h-67 pl-3 pr-3 pt-3 pb-3 flex flex-col gap-3 bg-white rounded-2xl">
      <img
        src="https://s3-alpha-sig.figma.com/img/f76b/ca27/96e6c3ac95b8d7403c07382bd094ff58?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=btmq1rjYL8RBlurcI7WEzOgwQa2eTsdbx76IbCBcZRMyATowMBO-UbFyPhww7nrbp-bHMMD-kGDQ5hqnqCDq2lfRxIj8wVA8rw8-xiqH-nlIAwmXz~2yUNKz5bPB8ByJq8xRxpC5C2IhlH1QX-kfXgG4-HqoRghE552wc7nQZoXRAAUY8SbeqtVNR-tIZMFNA~lhlQ2lEKFJVQcNozutDviX1XMWtqdbfk05IHBuea1AeXawKZe6~8FgApUI~0S23s5zovTOQ9mx497KF7IvfUCAkU9oqLZ4ltU4kaCIrSDL0dPTGdPLvUrWApiqPQGywe--jHnuuoSjr8QJSRDaMQ__"
        alt="Hotel background"
        className="w-69 h-37 object-cover rounded-md"
      />
      <div className="h-12 flex flex-col gap-2">
        <div className=" flex justify-between">
          <div className="font-medium text-[#004225] ">Harmony</div>
          <div className="w-8.5 h-6 bg-[#007E47] text-white text-sm font-light rounded-sm flex justify-center items-center">
            4.5
          </div>
        </div>
        <span className="font-normal text-[#5F5F5F] text-md">
          Connaught Place, Central Delhi
        </span>
      </div>
      <div className="font-light text-[#5F5F5F] text-sm">
        ₹ 2,100 for 2 (approx) | North Indian, Asian
      </div>
    </div>
  );
}
