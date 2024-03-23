function autoFormClose() {
  //以ID定義使用的表單和試算表檔案
  let singUpForm = FormApp.openById('132E5ypUwKVw5Ei-56DuL3maI4qbXufiDeAJ-53X_y9s');
  let respondSheets = SpreadsheetApp.openById('1h6K8ZWoY0_9HFVRZng8Z2AOhkZRiqlZR-Yv0-zEI2Pg');
  //指定使用特定的Sheet
  let calSheet = respondSheets.getSheetByName('signUp');
  //單純的測試，請忽略下方datacheck
  //let dataCheck = calSheet.getLastRow();
  //Logger.log('Check point' + dataCheck);
  //先以0，設定大人的數量，用來儲存資料
  let adultNum = 0;
  //截取資料
  let data = calSheet.getDataRange().getValues();
  //並以迴圈逐行加總
  for (var i = 0; i < data.length; i++) {
  // 確認C欄位資料是否爲數字（可以在表單中先限定，這裏保留寫法，讓代碼可以適應更多狀況  
    if (!isNaN(data[i][2])) { 
    // 如果C欄循列的值爲數字，將數字加到adultNum這個變數中
      adultNum += data[i][2]; 
    }
  }
  let kidNum = 0;
  for (var i = 0; i < data.length; i++) {
  //這裡將欄位換成D欄，索引是3
    if (!isNaN(data[i][3])) { 
      kidNum += data[i][3]; 
    }
  }
  //關閉的判斷式，如果C欄加上D欄，大於10就會關閉表單
  if (adultNum + kidNum > 10){
  singUpForm.setAcceptingResponses(false);
  }
}
