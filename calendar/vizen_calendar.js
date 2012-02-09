/**
 * vizen_calendar 2012. 02. 01 
 * version 0.1 
 * by zpzgzerg (zpzgzerg@naver.com)
 */	

	var vizenConfig = {
		
		id				: "",
		display_zone	: "",
		startday_name	: "",
		startday		: "",
		endday_name		: "",
		endday			: "",		
		selectday		: "default",
		currentDate		: new Date(),
		nowDate			: new Date(),		
		prevDate		: new Date(),
		nextDate		: new Date(),
		y_prevDate		: new Date(),
		y_nextDate		: new Date(),
		days 			: new Array("일", "월", "화", "수", "목", "금", "토"),
		splitKey		: "-"
		
	};	
	
	// 초기화
	function init(id, display_zone, startday_name, endday_name, startday, endday) {
		
		vizenConfig.id = id;
		vizenConfig.display_zone = display_zone;
		
		vizenConfig.startday_name = startday_name;
		vizenConfig.endday_name = endday_name;	
		
		vizenConfig.startday = startday;
		vizenConfig.endday = endday;		
		
		var dates = vizenConfig.currentDate;
		
		// 현재보고 있는 날짜
		vizenConfig.nowDate = new Date(dates.getFullYear(), dates.getMonth(), 1);
		
		// 날짜 재배치
		rebaseDate();
		
		// div 생성
		$(document.body).append("<div id='"+vizenConfig.id+"'><div>");		
		
		// 달력 그리기
		drawCalendar();
		
		// 초기 설정 값 표시
		$("#"+vizenConfig.display_zone).text(vizenConfig.startday + " ~ " + vizenConfig.endday);
		$("#"+vizenConfig.startday_name+"_text").val(vizenConfig.startday);
		$("#"+vizenConfig.endday_name+"_text").val(vizenConfig.endday);
		$("#"+vizenConfig.startday_name).val(vizenConfig.startday);
		$("#"+vizenConfig.endday_name).val(vizenConfig.endday);
		
		drawMonthCalendar();
		drawDayCalendar();
		
		$("#"+vizenConfig.id).hide();
		
		$("#"+vizenConfig.display_zone).click(function() {
			$("#"+vizenConfig.id).show();
		});
		
		// 시작날짜 인풋 박스 클릭시
		$("#"+vizenConfig.startday_name+"_text").click(function() {
			
			vizenConfig.selectday = "startday";
			$("#"+vizenConfig.endday_name+"_text").css("border", "1px solid #6b6b6b");
			$("#"+vizenConfig.startday_name+"_text").css("border", "2px solid #d4d4dc");
		});
		
		// 종료날짜 인풋 박스 클릭시
		$("#"+vizenConfig.endday_name+"_text").click(function() {
			
			vizenConfig.selectday = "endday";
			$("#"+vizenConfig.startday_name+"_text").css("border", "1px solid #6b6b6b");
			$("#"+vizenConfig.endday_name+"_text").css("border", "2px solid #d4d4dc");
			
		});
		
		// 이전 년 클릭시
		$("#year_prev_btn").click(function() {						
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.y_prevDate.getFullYear(), vizenConfig.y_prevDate.getMonth(), 1);
			
			// 날짜 재배치
			rebaseDate();			

			// 달력 출력
			drawMonthCalendar();					
			drawDayCalendar();
		});
		
		// 다음 년 클릭시
		$("#year_next_btn").click(function() {			
		
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.y_nextDate.getFullYear(), vizenConfig.y_nextDate.getMonth(), 1);			
			
			// 날짜 재배치
			rebaseDate();
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();		
		});	
		
		// 이전 월 클릭시
		$("#month_prev_btn").click(function() {						
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.prevDate.getFullYear(), vizenConfig.prevDate.getMonth(), 1);
			
			// 날짜 재배치
			rebaseDate();			

			// 달력 출력
			drawMonthCalendar();					
			drawDayCalendar();
		});
		
		// 다음 월 클릭시
		$("#month_next_btn").click(function() {			
			
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), 1);			
			
			// 날짜 재배치
			rebaseDate();						
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();		
		});			
		
		$("#close_btn").click(function() {
			$("#"+vizenConfig.id).hide();
		});
		
		// 오늘 클릭시
		$("#today_btn").click(function() {
			
			var date = vizenConfig.currentDate.getFullYear() + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getDate());
						
			$("#"+vizenConfig.startday_name+"_text").val(date);
			$("#"+vizenConfig.endday_name+"_text").val(date);
			
			// 이번 달			
			vizenConfig.nowDate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), 1);			
			
			// 날짜 재배치
			rebaseDate();
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();
			
		});
		
		// 7일 클릭시
		$("#week_btn").click(function() {
			
			var startdate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), vizenConfig.currentDate.getDate()-6);
			
			var startday = startdate.getFullYear() + vizenConfig.splitKey + getZeroAdd(startdate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(startdate.getDate());
			var endday = vizenConfig.currentDate.getFullYear() + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getDate());
						
			$("#"+vizenConfig.startday_name+"_text").val(startday);
			$("#"+vizenConfig.endday_name+"_text").val(endday);
			
			// 이번 달			
			vizenConfig.nowDate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), 1);
			
			// 날짜 재배치
			rebaseDate();
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();
			
		});
		
		// 30일 클릭시
		$("#month_btn").click(function() {
			
			var startdate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), vizenConfig.currentDate.getDate()-29);
			
			var startday = startdate.getFullYear() + vizenConfig.splitKey + getZeroAdd(startdate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(startdate.getDate());
			var endday = vizenConfig.currentDate.getFullYear() + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getDate());			
						
			$("#"+vizenConfig.startday_name+"_text").val(startday);
			$("#"+vizenConfig.endday_name+"_text").val(endday);
			
			// 이번 달			
			vizenConfig.nowDate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), 1);
			
			// 날짜 재배치
			rebaseDate();
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();
			
		});
		
		// 90일 클릭시
		$("#ninety_btn").click(function() {
			
			var startdate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), vizenConfig.currentDate.getDate()-89);
			
			var startday = startdate.getFullYear() + vizenConfig.splitKey + getZeroAdd(startdate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(startdate.getDate());
			var endday = vizenConfig.currentDate.getFullYear() + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getMonth()+1) + vizenConfig.splitKey + getZeroAdd(vizenConfig.currentDate.getDate());
						
			$("#"+vizenConfig.startday_name+"_text").val(startday);
			$("#"+vizenConfig.endday_name+"_text").val(endday);
			
			// 이번 달			
			vizenConfig.nowDate = new Date(vizenConfig.currentDate.getFullYear(), vizenConfig.currentDate.getMonth(), 1);
			
			// 날짜 재배치
			rebaseDate();
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();
			
		});
		
		// 조회 클릭시
		$("#c_search_btn, #c_search_btn2").click(function() {
			
			vizenConfig.startday = $("#"+vizenConfig.startday_name+"_text").val();
			vizenConfig.endday = $("#"+vizenConfig.endday_name+"_text").val();
			$("#"+vizenConfig.startday_name).val(vizenConfig.startday);
			$("#"+vizenConfig.endday_name).val(vizenConfig.endday);
			$("#"+vizenConfig.display_zone).text(vizenConfig.startday + " ~ " + vizenConfig.endday);			
						
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
		
		$("#monthCalendar").html(contents);	
		
		for (var i=1; i<=12; i++) {		
			$("#month"+i+"btn").bind("click", {obj:i}, monthClicked);
		}	
		
		// 초기화 클릭함수
		function monthClicked(e) {		
		
			// 이번 달
			vizenConfig.nowDate = new Date(vizenConfig.nowDate.getFullYear(), (e.data.obj-1), 1);
			
			// 날짜 재배치
			rebaseDate();			
			
			// 달력 출력
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
		
			
		
			var date = prevLastDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(prevLastDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(prevLastDate.getDate()-(prevLastDate.getDay()-i));
									

			contents += "		<td id='day"+date+"btn' class='"+getDayOfWeekColor(prevLastDate.getFullYear(), prevLastDate.getMonth(), (prevLastDate.getDate()-(prevLastDate.getDay()-i)), true)+"'>"+(prevLastDate.getDate()-(prevLastDate.getDay()-i))+"</td>";		
		}		
		
		for(var i=1; i<=lastDate.getDate(); i++) {
			
			var date = vizenConfig.nowDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(vizenConfig.nowDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(i);				

			// 일요일이되면 개행
			if(getDayOfWeek(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), i) == 0 && i != 1) {

				contents += "</tr>";
				contents += "<tr>";
				
			}
			
			contents += "		<td id='day"+date+"btn' class='"+getDayOfWeekColor(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth(), i, false)+"'>"+i+"</td>";				
		}		
		
		for (var i=lastDate.getDay(); i<6; i++) {
			
			var date = vizenConfig.nextDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(vizenConfig.nextDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(i-(lastDate.getDay()-1));			
			
			contents += "		<td id='day"+date+"btn' class='"+getDayOfWeekColor(vizenConfig.nextDate.getFullYear(), vizenConfig.nextDate.getMonth(), (i-(lastDate.getDay()-1)), true)+"'>"+(i-(lastDate.getDay()-1))+"</td>";								
		}
		
		contents += "		</tr>";		
		contents += "	</tbody>";
		contents += "</table>";
		
		$("#dayCalendar").html(contents);
		
		for (var i = 0; i < vizenConfig.nowDate.getDay(); i++) {			
			
			var date = prevLastDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(prevLastDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(prevLastDate.getDate()-(prevLastDate.getDay()-i));
			
			$("#day"+date+"btn").bind("click", {obj:date}, dayClicked);
		}
		
		for (var i = 1; i <= lastDate.getDate(); i++) {
			
			var date = vizenConfig.nowDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(vizenConfig.nowDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(i);
			
			$("#day"+date+"btn").bind("click", {obj:date}, dayClicked);
		}
		
		for (var i = lastDate.getDay(); i < 6; i++) {
			
			var date = vizenConfig.nextDate.getFullYear()+vizenConfig.splitKey+getZeroAdd(vizenConfig.nextDate.getMonth()+1)+vizenConfig.splitKey+getZeroAdd(i-(lastDate.getDay()-1));
			
			$("#day"+date+"btn").bind("click", {obj:date}, dayClicked);
		}
		
		// 초기화 클릭함수
		function dayClicked(e) {			
			
			if (vizenConfig.selectday == "default") {
				
				$("#"+vizenConfig.startday_name+"_text").val(e.data.obj);
				$("#"+vizenConfig.endday_name+"_text").val(e.data.obj);						
				
			} else if(vizenConfig.selectday == "startday") {
								
				$("#"+vizenConfig.startday_name+"_text").val(e.data.obj);				
				
			} else if(vizenConfig.selectday == "endday") {
								
				$("#"+vizenConfig.endday_name+"_text").val(e.data.obj);				
			}
						
			$("#"+vizenConfig.startday_name+"_text").css("border", "1px solid #6b6b6b");
			$("#"+vizenConfig.endday_name+"_text").css("border", "1px solid #6b6b6b");
			vizenConfig.selectday = "default";
			
			// 달력 출력
			drawMonthCalendar();
			drawDayCalendar();			
		}		
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
		contents += "						<input type='text' class='input' id='"+vizenConfig.startday_name+"_text' value='' readonly style='width:70px'>";
		contents += "						부터";
		contents += "						<input type='text' class='input' id='"+vizenConfig.endday_name+"_text' value='' readonly style='width:70px'>";
		contents += "						까지";
		contents += "						&nbsp;<img src='img/calendar_hit_btn.gif' id='c_search_btn' style='cursor:pointer' align='absmiddle'>";
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
		contents += "								<td width='58'><img src='img/calendar_btn_today.gif' id='today_btn' style='cursor:pointer'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_week.gif' id='week_btn' style='cursor:pointer'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_month.gif' id='month_btn' style='cursor:pointer'></td>";
		contents += "								<td width='58'><img src='img/calendar_btn_ninety.gif' id='ninety_btn' style='cursor:pointer'></td>";
		contents += "								<td><img src='img/calendar_btn_hit.gif' id='c_search_btn2' style='cursor:pointer'></td>";
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
	
	// 날짜 재배치
	function rebaseDate() {
		
		// 현재보고 있는 기준에서 이전월 날짜
		vizenConfig.prevDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()-1, 1);
		
		// 현재보고 있는 기준에서 다음월 날짜
		vizenConfig.nextDate = new Date(vizenConfig.nowDate.getFullYear(), vizenConfig.nowDate.getMonth()+1, 1);
		
		// 현재보고 있는 기준에서 이전년 날짜
		vizenConfig.y_prevDate = new Date(vizenConfig.nowDate.getFullYear()-1, vizenConfig.nowDate.getMonth(), 1);
		
		// 현재보고 있는 기준에서 다음년 날짜
		vizenConfig.y_nextDate = new Date(vizenConfig.nowDate.getFullYear()+1, vizenConfig.nowDate.getMonth(), 1);
		
		$("#txtMonthYear").text(vizenConfig.nowDate.getFullYear());
		$("#txtDayYear").text(vizenConfig.nowDate.getFullYear());
		$("#txtDayMonth").text(vizenConfig.nowDate.getMonth()+1);
		
	}
	
	// 요일 리턴 함수 (0이면 일요일 ~ 6이면 토요일)
	function getDayOfWeek(year, month, day) {
		
		return new Date(year, month, day).getDay();
				 	
	}
	
	// 요일 색상 리턴 함수
	function getDayOfWeekColor(year, month, day, isPrevNext) {
		
		var curDate = new Date(year, month, day);
						
		var dayofweek = curDate.getDay();
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
		
		// 선택된 날짜 판단하기		
		var startdays = $("#"+vizenConfig.startday_name+"_text").val().split(vizenConfig.splitKey);
		var enddays = $("#"+vizenConfig.endday_name+"_text").val().split(vizenConfig.splitKey);
				
		var startdate = new Date(startdays[0], (startdays[1]-1), startdays[2]);		
		var enddate = new Date(enddays[0], (enddays[1]-1), enddays[2]);
		
		if(startdate.getTime() <= curDate.getTime() && curDate.getTime() <= enddate.getTime()) {
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
		
	// 날짜 숫자가 한자리인거 0 붙이기
	function getZeroAdd(data) {				
		
		if(data < 10) {
			data = "0" + data;			
		}
		
		return data;	
	}