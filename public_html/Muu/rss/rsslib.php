<?php
class RSS 
{
	
	private $Content = array();
	private $url = '';
	
	public function __construct($url)
	{
		$this->url = $url;
	}
	
	private function Tags($item, $type)
	{
		$y = array();
		$tnl = $item->getElementsByTagName("title");
		$tnl = $tnl->item(0);
		if(!is_object($tnl) || !is_object($tnl->firstChild)) return $y;
		$title = $tnl->firstChild->textContent;
	
		$tnl = $item->getElementsByTagName("link");
		$tnl = $tnl->item(0);
		if(!is_object($tnl) || !is_object($tnl->firstChild)) return $y;
		$link = $tnl->firstChild->textContent;
		
		$tnl = $item->getElementsByTagName("pubDate");
		$tnl = $tnl->item(0);
		if(!is_object($tnl) || !is_object($tnl->firstChild)) return $y;
		$date = $tnl->firstChild->textContent;		
	
		$tnl = $item->getElementsByTagName("description");
		$tnl = $tnl->item(0);
		if(!is_object($tnl) || !is_object($tnl->firstChild)) return $y;
		$description = $tnl->firstChild->textContent;
		
		$y["title"] = $title;
		$y["link"] = $link;
		$y["date"] = $date;		
		$y["description"] = $description;
		$y["type"] = $type;
		
		return $y;
	}
	
	private function Channel($channel)
	{
		$items = $channel->getElementsByTagName("item");
		
		// Processing channel
		
		$y = $this->Tags($channel, 0);		// get description of channel, type 0
		if(!empty($y)) array_push($this->Content, $y);
		
		// Processing articles
		
		foreach($items as $item)
		{
			$y = $this->Tags($item, 1);	// get description of article, type 1
				if(!empty($y)) array_push($this->Content, $y);
		}
	}
	
	private function Retrieve($url)
	{
		$doc  = new DOMDocument();
		$doc->load($url);
	
		$channels = $doc->getElementsByTagName("channel");
		
		$this->Content = array();
		
		foreach($channels as $channel)
		{
			$this->Channel($channel);
		}
	}
	
	private function RetrieveLinks($url)
	{
		$doc  = new DOMDocument();
		$doc->load($url);
	
		$channels = $doc->getElementsByTagName("channel");
		
		$this->Content = array();
		
		foreach($channels as $channel){
			$items = $channel->getElementsByTagName("item");
			foreach($items as $item){
				$y = $this->Tags($item, 1);	// get description of article, type 1
				if(!empty($y)) array_push($this->Content, $y);
			}	 
		}
	}
	
	private function Links($url, $size = 15)
	{
		$page = "<ul>";
	
		$this->RetrieveLinks($url);
		if($size > 0)
			$recents = array_slice($this->Content, 0, $size + 1);
	
		foreach($recents as $article){
			$type = $article["type"];
			if($type == 0) continue;
			$title = $article["title"];
			$link = $article["link"];
			$page .= "<li><a href=\"$link\">$title</a></li>\n";			
		}
	
		$page .="</ul>\n";
	
		return $page;
	}
	
	public function Display($size = 15, $site = 0, $withdate = 0)
	{
		$opened = false;
		$page = "";
		$site = (intval($site) == 0) ? 1 : 0;
	
		$this->Retrieve($this->url);
		if($size > 0)
			$recents = array_slice($this->Content, $site, $size + 1 - $site);
	
		foreach($recents as $article){
			$type = $article["type"];
			if($type == 0){
				if($opened == true){
					$page .="</ul>\n";
					$opened = false;
				}
				$page .="<b>";
			}
			else{
				if($opened == false){
					$page .= "<ul>\n";
					$opened = true;
				}
			}
			$title = $article["title"];
			$link = $article["link"];
			$page .= "<div><li><b><a href=\"$link\">$title</a></b>";
			if($withdate){
				$date = $article["date"];
				$page .=' <span class="rssdate">'.$date.'</span>';
			}
			$description = $article["description"];
			if($description != false){
				$page .= "<br><span class='rssdesc'>$description</span>";
			}
			$page .= "</li></div>\n";			
			
			if($type==0){
				$page .="</b><br />";
			}
		}
	
		if($opened == true){	
			$page .="</ul>\n";
		}
		return $page."\n";	
	}
}
?>