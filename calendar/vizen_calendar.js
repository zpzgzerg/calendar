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
		nowDate			: new Date(),		
		prevDate		: new Date(),
		nextDate		: new Date(),
		days 			: new Array("일", "월", "화", "수", "목", "금", "토")
		
	};	
	
	// 초기화
	function init(id, click_btn) {
		
		vizenConfig.id = id;
		vizenConfig.click_btn = click_btn;
				
		var dates = vizenConfig.currentDate;
		
		// 현재보고 있는 날짜
		vizenConfig.nowDate = new Date(dates.getFullYear(), dates.getMonth(), 1);
		
		// 현재보고 있는 기준에서 이전 날짜
		vizenConfig.prevDate = new Date(dates.getFullYear(), dates.getMonth()-1, 1);
		
		// 현재보고 있는 기준에서 다음 날짜
		vizenConfig.nextDate = new Date(dates.getFullYear(), dates.getMonth()+1, 1);		
		
		// div 생성
		$(document.body).append("<div id='"+vizenConfig.id+"'><div>");
		
		// 달력 그리기
		drawCalendar();
		drawContents();
		
		$("#"+vizenConfig.id).hide();
		
		$("#"+vizenConfig.click_btn).click(function() {
			$("#"+vizenConfig.id).show();
		});
		
		// 이전 월 클릭시
		$("#prev_btn").click(function() {			
			
			// 현재보고 있는 날짜
			vizenConfig.nowDate = new Date(vizenConfig.prevDate.getFullYear(), vizenConfig.prevDate.getMonth(), 1);
			
			// 현재보고 있는 기준에서 이전 날짜
			vizenConfig.prevDate = new Date(vizenConfig.prevDate.getFullYear(), vizenConfig.prevDate.getMonth()-1, 1);
			
			// 현재보고 있는 기준에서 다음 날짜
			vizenConfig.nextDate = new Date(vizenConfig.prevDate.getFullYear(), vizenConfig.prevDate.getMonth()+1, 1);	
			
			$("#txtYear2").text(vizenConfig.nowDate.getFullYear());
			$("#txtMonth").text(vizenConfig.nowDate.getMonth()+1);			
								
			drawContents();
		});
		
		// 다음 월 클릭시
		$("#next_btn").click(function() {			
			
			// 현재보고 있는 날짜
			vizenConfig.nowDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), 1);			
			
			// 현재보고 있는 기준에서 이전 날짜
			vizenConfig.prevDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth()-1, 1);			
			
			// 현재보고 있는 기준에서 다음 날짜
			vizenConfig.nextDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth()+1, 1);			
			
			$("#txtYear2").text(vizenConfig.nowDate.getFullYear());
			$("#txtMonth").text(vizenConfig.nowDate.getMonth()+1);
			
			drawContents();		
		});	
		
		$("#close_btn").click(function() {
			$("#"+vizenConfig.id).hide();
		});	
	
	}		
	
	function drawContents() {
		
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
			contents += "		<td class='cd'></td>";			
		}
		
		for(var i=1; i<=lastDate.getDate(); i++) {		

			if(new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), i).getDay() == 0 && i != 1) {

				contents += "</tr>"
				contents += "<tr>"					
				
			}
			
			contents += "		<td class='cdck'><a href='#'>"+i+"</a></td>";			
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
		
		$("#Contents").html(contents);		
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
		vizenConfig.contents += "					<td align='right' valign='top'><img src='img/calendar_btn_close.gif' id='close_btn' style='cursor:hand;'></td>";
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
		vizenConfig.contents += "											<td valign='top' class='calyear' width='214'><span id='txtYear2'>"+vizenConfig.nowDate.getFullYear()+"</span>년 <span id='txtMonth'>"+(vizenConfig.nowDate.getMonth()+1)+"</span>월</td>";
		vizenConfig.contents += "											<td width='18' valign='top'><img src='img/calendar_btn_next.gif' id='next_btn' style='cursor:pointer'></td>";
		vizenConfig.contents += "										</tr>";
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' height='2' bgcolor='#82868b'></td>";
		vizenConfig.contents += "										</tr>";		
		vizenConfig.contents += "										<tr>";
		vizenConfig.contents += "											<td colspan='3' valign='top'>";
		vizenConfig.contents += "												<div id='Contents'></div>";
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