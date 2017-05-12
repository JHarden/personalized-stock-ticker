
interface QuoteSnapshotProps {
	Symbol: string;
	AverageDailyVolume: string;
	Change: string;
	DaysLow: string;
	DaysHigh: string;
	YearLow: string;
	YearHigh: string;
	MarketCapitalization: string;
	LastTradePriceOnly: string;
	DaysRange: string;
	Name: string;
	Volume: string;
	StockExchange: string;
}

class QuoteSnapshot implements QuoteSnapshotProps {

	public Symbol: string;
	public AverageDailyVolume: string;
	public Change: string;
	public DaysLow: string;
	public DaysHigh: string;
	public YearLow: string;
	public YearHigh: string;
	public MarketCapitalization: string;
	public LastTradePriceOnly: string;
	public DaysRange: string;
	public Name: string;
	public Volume: string;
	public StockExchange: string;
}

export default QuoteSnapshot;