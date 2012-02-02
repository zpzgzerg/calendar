/**
 * vizen_calendar 2012. 02. 01 
 * version 0.1 
 * by zpzgzerg (zpzgzerg@naver.com)
 */	

	var vizenConfig = {
		
		id				: "",
		click_btn		: "",
		contents		: "",
		currentDate		: new Date(),
		nowDate			: null,		
		prevDate		: null,
		nextDate		: null 
		
	};	
	
	// 초기화
	function init(id, click_btn) {
		
		vizenConfig.id = id;
		vizenConfig.click_btn = click_btn;
				
		var dates = {
			year 	: vizenConfig.currentDate.getFullYear(),
			month 	: vizenConfig.currentDate.getMonth()+1,
			day 	: vizenConfig.currentDate.getDay()
		};		
		
		// 현재보고 있는 날짜
		vizenConfig.nowDate = new Date(dates.year, dates.month, dates.day);
		
		// 현재보고 있는 기준에서 이전 날짜
		vizenConfig.prevDate = new Date(dates.year, dates.month-1, 1);
		
		// 현재보고 있는 기준에서 다음 날짜
		vizenConfig.nextDate = new Date(dates.year, dates.month+1, 1);		
		
		// div 생성
		$(document.body).append("<div id='"+vizenConfig.id+"'><div>");
		
		drawCalendar();
		$("#"+id).hide();
		
		$("#"+vizenConfig.click_btn).click(function() {
			$("#"+id).show();
		});
		
		// 이전 월 클릭시
		$("#prev_btn").click(function() {			
			
			var prevDates = {
				year 	: vizenConfig.prevDate.getFullYear(),
				month 	: vizenConfig.prevDate.getMonth(),
				day 	: vizenConfig.prevDate.getDay()
			};
			
			// 현재보고 있는 날짜
			vizenConfig.nowDate = new Date(prevDates.year, prevDates.month, prevDates.day);
			
			// 현재보고 있는 기준에서 이전 날짜
			vizenConfig.prevDate = new Date(prevDates.year, prevDates.month-1, 1);
			
			// 현재보고 있는 기준에서 다음 날짜
			vizenConfig.nextDate = new Date(prevDates.year, prevDates.month+1, 1);	
								
			drawCalendar();
		});
		
		// 다음 월 클릭시
		$("#next_btn").click(function() {			
			
			var nextDates = {			
				year 	: vizenConfig.nextDate.getFullYear(),
				month 	: vizenConfig.nextDate.getMonth()+1,
				day 	: vizenConfig.nextDate.getDay()			
			};			
			
			// 현재보고 있는 날짜
			vizenConfig.nowDate = new Date(nextDates.year, nextDates.month, nextDates.day);
			
			// 현재보고 있는 기준에서 이전 날짜
			vizenConfig.prevDate = new Date(nextDates.year, nextDates.month-1, 1);
			
			// 현재보고 있는 기준에서 다음 날짜
			vizenConfig.nextDate = new Date(nextDates.year, nextDates.month+1, 1);	
			
			drawCalendar();		
		});		
	
	}		
	
	function drawContents() {
		
		var contents = "";
		
		
		
	}

	// 달력 인터페이스 생성
	function drawCalendar() {
		
		vizenConfig.contents = "";
		
		vizenConfig.contents += "<table width='481' border='0' cellspacing='0' cellpadding='0'>";
		vizenConfig.contents += "	<tr>";
		vizenConfig.contents += "		<td height='59' style='background: url(img/calendar_topbg.gif) repeat-x left top' align='center'>";
		vizenConfig.contents += "			<table width='462' height='39' cellpadding='0' cellspacing='0' border='0' class='calTOP'>";
		vizenConfig.contents += "				<tr>";
		vizenConfig.contents += "					<td class='year' valign='bottom'>";
		vizenConfig.contents += "						<input type='text' class='input' value='2012-02-01' style='width:70px'>";
		vizenConfig.contents += "						부터";
		vizenConfig.contents += "						<input type='text' class='input' value='2012-02-10' style='width:70px'>";
		vizenConfig.contents += "						까지";
		vizenConfig.contents += "						&nbsp;<img src='img/calendar_hit_btn.gif' align='absmiddle'>";
		vizenConfig.contents += "					</td>";
		vizenConfig.contents += "					<td align='right' valign='top'><img src='img/calendar_btn_close.gif'></td>";
		vizenConfig.contents += "				</tr>";
		vizenConfig.contents += "			</table>";
		vizenConfig.contents += "		</td>";
		vizenConfig.contents += "	</tr>";
		vizenConfig.contents += "	<tr>";
		vizenConfig.contents += "		<td height='271' style='background: url(img/calendar_conbg.gif) repeat-x left top' valign='top'>";
		vizenConfig.contents += " 			<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		vizenConfig.contents += "				<tr>";
		vizenConfig.contents += "					<td>";
		vizenConfig.contents += "						<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		vizenConfig.contents += "							<tr>";
		vizenConfig.contents += "								<td width='23' valign='top' align='right'>";
		vizenConfig.contents += "									<ul class='calMTul'>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "									</ul>";
		vizenConfig.contents += "								</td>";
		vizenConfig.contents += "								<td width='158' style='padding-top:20px;' valign='top'>";
		vizenConfig.contents += "									<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td width='18' valign='top' height='22'><img src='img/calendar_btn_back.gif'></td>";
		vizenConfig.contents += "											<td valign='top' class='calyear' width='122'>"+vizenConfig.nowDate.getFullYear()+"년</td>";
		vizenConfig.contents += "											<td width='18' valign='top'><img src='img/calendar_btn_next.gif'></td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' height='2' bgcolor='#82868b'></td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' valign='top'>";
		vizenConfig.contents += "												<table width='100%' cellpadding='0' cellspacing='0' border='0' class='calYT'>";
		vizenConfig.contents += "													<tr>";
		vizenConfig.contents += "														<td class='Ycon'>";
		vizenConfig.contents += "															<table width='125' cellpadding='0' cellspacing='0' border='0' class='calMT'>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>1월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mbcon'><a href='#'>2월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>3월</a></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td colspan='5' height='7'></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>4월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>5월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>6월</a></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td colspan='5' height='7'></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>7월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>8월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>9월</a></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td colspan='5' height='7'></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "																<tr>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>10월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>11월</a></td>";
		vizenConfig.contents += "																	<td width='19'></td>";
		vizenConfig.contents += "																	<td class='Mcon'><a href='#'>12월</a></td>";
		vizenConfig.contents += "																</tr>";
		vizenConfig.contents += "															</table>";
		vizenConfig.contents += "														</td>";
		vizenConfig.contents += "													</tr>";
		vizenConfig.contents += "												</table>";
		vizenConfig.contents += "											</td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "									</table>";
		vizenConfig.contents += "								</td>";
		vizenConfig.contents += "								<td width='38' valign='top' align='right'>";
		vizenConfig.contents += "									<ul class='cdTableul'>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		vizenConfig.contents += "									</ul>";
		vizenConfig.contents += "								</td>";
		vizenConfig.contents += "								<td width='262' style='padding-top:20px;' valign='top'>";		
		vizenConfig.contents += "									<table width='250' cellpadding='0' cellspacing='0' border='0'>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td width='18' valign='top' height='22'><img src='img/calendar_btn_back.gif' id='prev_btn' style='cursor:pointer'></td>";
		vizenConfig.contents += "											<td valign='top' class='calyear' width='214'>"+vizenConfig.nowDate.getFullYear()+"년 "+vizenConfig.nowDate.getMonth()+"월</td>";
		vizenConfig.contents += "											<td width='18' valign='top'><img src='img/calendar_btn_next.gif' id='next_btn' style='cursor:pointer'></td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' height='2' bgcolor='#82868b'></td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "										<div id='Contents'></div>";		
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' valign='top'>";
		vizenConfig.contents += "												<table width='100%' border='0' cellspacing='0' cellpadding='0' class='cdTable'>";
		vizenConfig.contents += "													<thead>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<th scope='col'>일</th>";
		vizenConfig.contents += "															<th scope='col'>월</th>";
		vizenConfig.contents += "															<th scope='col'>화</th>";
		vizenConfig.contents += "															<th scope='col'>수</th>";
		vizenConfig.contents += "															<th scope='col'>목</th>";
		vizenConfig.contents += "															<th scope='col'>금</th>";
		vizenConfig.contents += "															<th scope='col'>토</th>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "													</thead>";
		vizenConfig.contents += "													<tbody>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<td class='sun cd'><a href='#'>29</a></td>";
		vizenConfig.contents += "															<td class='cd'>30</td>";
		vizenConfig.contents += "															<td class='cd'>31</td>";
		vizenConfig.contents += "															<td class='cdck'><a href='#'>1</a></td>";
		vizenConfig.contents += "															<td class='cdck'>2</td>";
		vizenConfig.contents += "															<td class='cdck'>3</td>";
		vizenConfig.contents += "															<td class='cdck'>4</td>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<td class='cdck'>5</td>";
		vizenConfig.contents += "															<td class='cdck'>6</td>";
		vizenConfig.contents += "															<td class='cdck'>7</td>";
		vizenConfig.contents += "															<td class='cdck'>8</td>";
		vizenConfig.contents += "															<td class='cdck'>9</td>";
		vizenConfig.contents += "															<td class='cdck'>10</td>";
		vizenConfig.contents += "															<td class='sat'>11</td>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<td class='sun'>12</td>";
		vizenConfig.contents += "															<td>13</td>";
		vizenConfig.contents += "															<td>14</td>";
		vizenConfig.contents += "															<td>15</td>";
		vizenConfig.contents += "															<td>16</td>";
		vizenConfig.contents += "															<td>17</td>";
		vizenConfig.contents += "															<td class='sat'>18</td>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<td class='sun'>19</td>";
		vizenConfig.contents += "															<td>20</td>";
		vizenConfig.contents += "															<td>21</td>";
		vizenConfig.contents += "															<td>22</td>";
		vizenConfig.contents += "															<td>23</td>";
		vizenConfig.contents += "															<td>24</td>";
		vizenConfig.contents += "															<td class='sat'>25</td>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "														<tr>";
		vizenConfig.contents += "															<td class='sun'>26</td>";
		vizenConfig.contents += "															<td>27</td>";
		vizenConfig.contents += "															<td>28</td>";
		vizenConfig.contents += "															<td>29</td>";
		vizenConfig.contents += "															<td class='cd'>1</td>";
		vizenConfig.contents += "															<td class='cd'>2</td>";
		vizenConfig.contents += "															<td class='sat cd'>3</td>";
		vizenConfig.contents += "														</tr>";
		vizenConfig.contents += "													</tbody>";
		vizenConfig.contents += "												</table>";
		vizenConfig.contents += "											</td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "									</table>";
		vizenConfig.contents += "								</td>";
		vizenConfig.contents += "							</tr>";
		vizenConfig.contents += "						</table>";
		vizenConfig.contents += "					</td>";
		vizenConfig.contents += "				</tr>";
		vizenConfig.contents += "				<tr>";
		vizenConfig.contents += "					<td valign='top' align='right' style='padding:40px 12px 26px 0;'>";
		vizenConfig.contents += "						<table width='277' cellpadding='0' cellspacing='0' border='0'>";
		vizenConfig.contents += "							<tr>";
		vizenConfig.contents += "								<td width='58'><img src='img/calendar_btn_today.gif'></td>";
		vizenConfig.contents += "								<td width='58'><img src='img/calendar_btn_week.gif'></td>";
		vizenConfig.contents += "								<td width='58'><img src='img/calendar_btn_month.gif'></td>";
		vizenConfig.contents += "								<td width='58'><img src='img/calendar_btn_ninety.gif'></td>";
		vizenConfig.contents += "								<td><img src='img/calendar_btn_hit.gif'></td>";
		vizenConfig.contents += "							</tr>";
		vizenConfig.contents += "						</table>";
		vizenConfig.contents += "					</td>";
		vizenConfig.contents += "				</tr>";
		vizenConfig.contents += "			</table>";
		vizenConfig.contents += "		</td>";
		vizenConfig.contents += "	</tr>";
		vizenConfig.contents += "</table>";		
						
		$("#"+vizenConfig.id).html(vizenConfig.contents);		
				
	}	