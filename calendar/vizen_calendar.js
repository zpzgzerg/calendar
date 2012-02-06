/**
 * vizen_calendar 2012. 02. 01 
 * version 0.1 
 * by zpzgzerg (zpzgzerg@naver.com)
 */	

	var vizenConfig = {
		
		id				: "",
		click_btn		: "",		
		currentDate		: new Date(),
		nowDate			: new Date(),		
		prevDate		: new Date(),
		nextDate		: new Date(),
		y_prevDate		: new Date(),
		y_nextDate		: new Date(),
		days 			: new Array("일", "월", "화", "수", "목", "금", "토")
		
	};	
	
	// 초기화
	function init(id, click_btn) {
		
		vizenConfig.id = id;
		vizenConfig.click_btn = click_btn;
				
		var dates = vizenConfig.currentDate;
		
		// 현재보고 있는 날짜
		vizenConfig.nowDate = new Date(dates.getFullYear(), dates.getMonth(), 1);
		
		// 현재보고 있는 기준에서 이전월 날짜
		vizenConfig.prevDate = new Date(dates.getFullYear(), dates.getMonth()-1, 1);
		
		// 현재보고 있는 기준에서 다음월 날짜
		vizenConfig.nextDate = new Date(dates.getFullYear(), dates.getMonth()+1, 1);
		
		// 현재보고 있는 기준에서 이전년 날짜
		vizenConfig.y_prevDate = new Date(dates.getFullYear()-1, dates.getMonth(), 1);
		
		// 현재보고 있는 기준에서 다음년 날짜
		vizenConfig.y_nextDate = new Date(dates.getFullYear()+1, dates.getMonth(), 1);		
		
		// div 생성
		$(document.body).append("<div id='"+vizenConfig.id+"'><div>");		
		
		// 달력 그리기
		drawCalendar();
		drawMonthCalendar();
		drawDayCalendar();
		
		$("#"+vizenConfig.id).hide();
		
		$("#"+vizenConfig.click_btn).click(function() {
			$("#"+vizenConfig.id).show();
		});
		
		// 이전 년 클릭시
		$("#year_prev_btn").click(function() {						
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.y_prevDate.getFullYear(), vizenConfig.y_prevDate.getMonth(), 1);
			
			// 이전 달
			vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()-1, 1);
			
			// 다음 달
			vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()+1, 1);
			
			// 이전 년
			vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear()-1, vizenConfig.nowDate.getMonth(), 1);
			
			// 다음 년
			vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear()+1, vizenConfig.nowDate.getMonth(), 1);
			
			$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayMonth").text(vizenConfig.nowDate.getMonth()+1);			

			drawMonthCalendar();					
			drawDayCalendar();
		});
		
		// 다음 년 클릭시
		$("#year_next_btn").click(function() {			
		
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.y_nextDate.getFullYear(), vizenConfig.y_nextDate.getMonth(), 1);			
			
			// 이전 달
			vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()-1, 1);			
			
			// 다음 달
			vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()+1, 1);
			
			// 이전 년
			vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear()-1, vizenConfig.nowDate.getMonth(), 1);
			
			// 다음 년
			vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear()+1, vizenConfig.nowDate.getMonth(), 1);			
			
			$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayMonth").text(vizenConfig.nowDate.getMonth()+1);					
			
			drawMonthCalendar();
			drawDayCalendar();		
		});	
		
		// 이전 월 클릭시
		$("#month_prev_btn").click(function() {						
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.prevDate.getFullYear(), vizenConfig.prevDate.getMonth(), 1);
			
			// 이전 달
			vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()-1, 1);
			
			// 다음 달
			vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()+1, 1);
			
			// 이전 년
			vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear()-1, vizenConfig.nowDate.getMonth(), 1);
			
			// 다음 년
			vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear()+1, vizenConfig.nowDate.getMonth(), 1);	
			
			$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayMonth").text(vizenConfig.nowDate.getMonth()+1);			

			drawMonthCalendar();					
			drawDayCalendar();
		});
		
		// 다음 월 클릭시
		$("#month_next_btn").click(function() {			
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), 1);			
			
			// 이전 달
			vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()-1, 1);			
			
			// 다음 달
			vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()+1, 1);
			
			// 이전 년
			vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear()-1, vizenConfig.nowDate.getMonth(), 1);
			
			// 다음 년
			vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear()+1, vizenConfig.nowDate.getMonth(), 1);			
			
			$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayMonth").text(vizenConfig.nowDate.getMonth()+1);					
			
			drawMonthCalendar();
			drawDayCalendar();		
		});			
		
		$("#close_btn").click(function() {
			$("#"+vizenConfig.id).hide();
		});
	
	}
	
	// 월 달력 생성
	function drawMonthCalendar() {
		
		var contents = "";
		
		contents += "<table width='125' cellpadding='0' cellspacing='0' border='0' class='calMT'>";
		
		for(var i=1; i<=12; i++) {		

			// 3줄마다 개행
			if(i % 3 == 1 && i != 1) {

				contents += "	<tr>";
				contents += "		<td colspan='5' height='7'></td>";
				contents += "	</tr>";
				
			}
			
			contents += "		<td class='"+getMonthOfYearColor(vizenConfig.nowDate.getFullYear(), i)+"' id='month"+i+"btn'>"+i+"월</td>";
			
			if(i % 3 != 0) {			
				contents += "		<td width='19'></td>";
			}			
		}		
				
		contents += "</table>";
		
		/*contents += "<table width='125' cellpadding='0' cellspacing='0' border='0' class='calMT'>";
		contents += "	<tr>";
		contents += "		<td class='Mcon'><a href='#'>1월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mbcon'><a href='#'>2월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>3월</a></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td colspan='5' height='7'></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td class='Mcon'><a href='#'>4월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>5월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>6월</a></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td colspan='5' height='7'></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td class='Mcon'><a href='#'>7월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>8월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>9월</a></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td colspan='5' height='7'></td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td class='Mcon'><a href='#'>10월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>11월</a></td>";
		contents += "		<td width='19'></td>";
		contents += "		<td class='Mcon'><a href='#'>12월</a></td>";
		contents += "	</tr>";
		contents += "</table>";*/
		
		$("#monthCalendar").html(contents);	
		
		for (var i=1; i<=12; i++) {		
			$("#month"+i+"btn").bind("click", {obj:i}, monthClicked);
		}	
		
			// 초기화 클릭함수
		function monthClicked(e) {		
		
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.nowDate.getFullYear(), (e.data.obj-1), 1);
			
			// 이전 달
			vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth() - 1, 1);
			
			// 다음 달
			vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth() + 1, 1);
			
			// 이전 년
			vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear() - 1, vizenConfig.nowDate.getMonth(), 1);
			
			// 다음 년
			vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear() + 1, vizenConfig.nowDate.getMonth(), 1);
			
			$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
			$("#txtDayMonth").text(vizenConfig.nowDate.getMonth() + 1);
			
			drawMonthCalendar();
			drawDayCalendar();			
		}		
		
	}		
	
	// 일 달력 생성
	function drawDayCalendar() {
		
		// 저번달 마지막 날짜 구하기
		var prevLastDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), vizenConfig.nowDate.getDate()-1);
		
		// 이번달 마지막 날짜 구하기
		var lastDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), vizenConfig.nextDate.getDate()-1);
		
		var contents = "";
		
		contents += "<table width='100%' border='0' cellspacing='0' cellpadding='0' class='cdTable'>";
		contents += "	<thead>";
		contents += "		<tr>";
		contents += "			<th scope='col'>"+vizenConfig.days[0]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[1]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[2]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[3]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[4]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[5]+"</th>";
		contents += "			<th scope='col'>"+vizenConfig.days[6]+"</th>";
		contents += "		</tr>";
		contents += "	</thead>";
		contents += "	<tbody>";
		contents += "		<tr>";		
		
		for (var i=0; i<vizenConfig.nowDate.getDay(); i++) {			
			
			contents += "		<td class='"+getDayOfWeekColor(prevLastDate.getFullYear(), prevLastDate.getMonth(), (prevLastDate.getDate()-(prevLastDate.getDay()-i)), true, false)+"'><span>"+(prevLastDate.getDate()-(prevLastDate.getDay()-i))+"</span></td>";			
		}
		
		for(var i=1; i<=lastDate.getDate(); i++) {		

			// 일요일이되면 개행
			if(getDayOfWeek(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), i) == 0 && i != 1) {

				contents += "</tr>";
				contents += "<tr>";
				
			}
			
			contents += "		<td class='"+getDayOfWeekColor(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), i, false, false)+"'><span>"+i+"</span></td>";			
		}		
		
		for (var i=lastDate.getDay(); i<6; i++) {
			contents += "		<td class='"+getDayOfWeekColor(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), (i-(lastDate.getDay()-1)), true, false)+"'><span>"+(i-(lastDate.getDay()-1))+"</span></td>";			
		}
		
		contents += "		</tr>";
		
		/*contents += "		<tr>";
		contents += "			<td class='sun cd'><a href='#'>29</a></td>";
		contents += "			<td class='cd'>30</td>";
		contents += "			<td class='cd'>31</td>";
		contents += "			<td class='cdck'><a href='#'>1</a></td>";
		contents += "			<td class='cdck'>2</td>";
		contents += "			<td class='cdck'>3</td>";
		contents += "			<td class='cdck'>4</td>";
		contents += "		</tr>";
		contents += "		<tr>";
		contents += "			<td class='cdck'>5</td>";
		contents += "			<td class='cdck'>6</td>";
		contents += "			<td class='cdck'>7</td>";
		contents += "			<td class='cdck'>8</td>";
		contents += "			<td class='cdck'>9</td>";
		contents += "			<td class='cdck'>10</td>";
		contents += "			<td class='sat'>11</td>";
		contents += "		</tr>";
		contents += "		<tr>";
		contents += "			<td class='sun'>12</td>";
		contents += "			<td>13</td>";
		contents += "			<td>14</td>";
		contents += "			<td>15</td>";
		contents += "			<td>16</td>";
		contents += "			<td>17</td>";
		contents += "			<td class='sat'>18</td>";
		contents += "		</tr>";
		contents += "		<tr>";
		contents += "			<td class='sun'>19</td>";
		contents += "			<td>20</td>";
		contents += "			<td>21</td>";
		contents += "			<td>22</td>";
		contents += "			<td>23</td>";
		contents += "			<td>24</td>";
		contents += "			<td class='sat'>25</td>";
		contents += "		</tr>";
		contents += "		<tr>";
		contents += "			<td class='sun'>26</td>";
		contents += "			<td>27</td>";
		contents += "			<td>28</td>";
		contents += "			<td>29</td>";
		contents += "			<td class='cd'>1</td>";
		contents += "			<td class='cd'>2</td>";
		contents += "			<td class='sat cd'>3</td>";
		contents += "		</tr>";*/
		contents += "	</tbody>";
		contents += "</table>";
		
		$("#dayCalendar").html(contents);		
	}

	// 달력 인터페이스 생성
	function drawCalendar() {
		
		var contents = "";
		
		contents += "<table width='481' border='0' cellspacing='0' cellpadding='0'>";
		contents += "	<tr>";
		contents += "		<td height='59' style='background: url(img/calendar_topbg.gif) repeat-x left top' align='center'>";
		contents += "			<table width='462' height='39' cellpadding='0' cellspacing='0' border='0' class='calTOP'>";
		contents += "				<tr>";
		contents += "					<td class='year' valign='bottom'>";
		contents += "						<input type='text' class='input' value='2012-02-01' style='width:70px'>";
		contents += "						부터";
		contents += "						<input type='text' class='input' value='2012-02-10' style='width:70px'>";
		contents += "						까지";
		contents += "						&nbsp;<img src='img/calendar_hit_btn.gif' align='absmiddle'>";
		contents += "					</td>";
		contents += "					<td align='right' valign='top'><img src='img/calendar_btn_close.gif' id='close_btn' style='cursor:hand;'></td>";
		contents += "				</tr>";
		contents += "			</table>";
		contents += "		</td>";
		contents += "	</tr>";
		contents += "	<tr>";
		contents += "		<td height='271' style='background: url(img/calendar_conbg.gif) repeat-x left top' valign='top'>";
		contents += " 			<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		contents += "				<tr>";
		contents += "					<td>";
		contents += "						<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		contents += "							<tr>";
		contents += "								<td width='23' valign='top' align='right'>";
		contents += "									<ul class='calMTul'>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "									</ul>";
		contents += "								</td>";
		contents += "								<td width='158' style='padding-top:20px;' valign='top'>";
		contents += "									<table width='100%' cellpadding='0' cellspacing='0' border='0'>";
		contents += "										<tr>";
		contents += "											<td width='18' valign='top' height='22'><img src='img/calendar_btn_back.gif' id='year_prev_btn' style='cursor:pointer'></td>";
		contents += "											<td valign='top' class='calyear' width='122'><span id='txtMonthYear'>"+vizenConfig.nowDate.getFullYear()+"</span>년</td>";
		contents += "											<td width='18' valign='top'><img src='img/calendar_btn_next.gif' id='year_next_btn' style='cursor:pointer'></td>";
		contents += "										</tr>";
		contents += "										<tr>";
		contents += "											<td colspan='3' height='2' bgcolor='#82868b'></td>";
		contents += "										</tr>";
		contents += "										<tr>";
		contents += "											<td colspan='3' valign='top'>";
		contents += "												<table width='100%' cellpadding='0' cellspacing='0' border='0' class='calYT'>";
		contents += "													<tr>";
		contents += "														<td class='Ycon'>";
		contents += "															<div id='monthCalendar'></div>";		
		contents += "														</td>";
		contents += "													</tr>";
		contents += "												</table>";
		contents += "											</td>";
		contents += "										</tr>";
		contents += "									</table>";
		contents += "								</td>";
		contents += "								<td width='38' valign='top' align='right'>";
		contents += "									<ul class='cdTableul'>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "										<li><a href='#'><img src='img/calendar_btn_choice.gif'></a></li>";
		contents += "									</ul>";
		contents += "								</td>";
		contents += "								<td width='262' style='padding-top:20px;' valign='top'>";		
		contents += "									<table width='250' cellpadding='0' cellspacing='0' border='0'>";
		contents += "										<tr>";
		contents += "											<td width='18' valign='top' height='22'><img src='img/calendar_btn_back.gif' id='month_prev_btn' style='cursor:pointer'></td>";
		contents += "											<td valign='top' class='calyear' width='214'><span id='txtDayYear'>"+vizenConfig.nowDate.getFullYear()+"</span>년 <span id='txtDayMonth'>"+(vizenConfig.nowDate.getMonth()+1)+"</span>월</td>";
		contents += "											<td width='18' valign='top'><img src='img/calendar_btn_next.gif' id='month_next_btn' style='cursor:pointer'></td>";
		contents += "										</tr>";
		contents += "										<tr>";
		contents += "											<td colspan='3' height='2' bgcolor='#82868b'></td>";
		contents += "										</tr>";		
		contents += "										<tr>";
		contents += "											<td colspan='3' valign='top'>";
		contents += "												<div id='dayCalendar'></div>";
		contents += "											</td>";
		contents += "										</tr>";		
		contents += "									</table>";
		contents += "								</td>";
		contents += "							</tr>";
		contents += "						</table>";
		contents += "					</td>";
		contents += "				</tr>";
		contents += "				<tr>";
		contents += "					<td valign='top' align='right' style='padding:40px 12px 26px 0;'>";
		contents += "						<table width='277' cellpadding='0' cellspacing='0' border='0'>";
		contents += "							<tr>";
		contents += "								<td width='58'><img src='img/calendar_btn_today.gif'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_week.gif'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_month.gif'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_ninety.gif'></td>";
		contents += "								<td><img src='img/calendar_btn_hit.gif'></td>";
		contents += "							</tr>";
		contents += "						</table>";
		contents += "					</td>";
		contents += "				</tr>";
		contents += "			</table>";
		contents += "		</td>";
		contents += "	</tr>";
		contents += "</table>";		
						
		$("#"+vizenConfig.id).html(contents);
				
	}
	
	// 요일 리턴 함수 (0이면 일요일 ~ 6이면 토요일)
	function getDayOfWeek(year, month, day) {
		
		return new Date(year, month, day).getDay();
				 	
	}
	
	// 요일 색상 리턴 함수
	function getDayOfWeekColor(year, month, day, isPrevNext, isSelected) {
						
		var dayofweek = new Date(year, month, day).getDay();
		var colorClass = "";
		
		// 선택안된 날짜
		if(dayofweek == 0) {
			colorClass = "sun";			
			if(isPrevNext) { colorClass += " cd"; }
		} else if(dayofweek == 6) {
			colorClass = "sat";
			if(isPrevNext) { colorClass += " cd"; }
		} else {
			colorClass = "";
			if(isPrevNext) { colorClass += "cd"; }
		}
		
		// 선택된 날짜
		if(isSelected) {
			colorClass = "cdck";
		}
		
		return colorClass;
	}
	
	// 월 색상 리턴 함수
	function getMonthOfYearColor(year, month) {
								
		var colorClass = "Mcon";
			
		// 현재 년,월과 같으면 색상 표시					
		if(vizenConfig.nowDate.getFullYear() == year && (vizenConfig.nowDate.getMonth()+1) == month) {
			colorClass = "Mbcon";						
		} 
		
		return colorClass;
	}
