# appsscript_autoFormClose
A simple JS code to close Google form when the column sum up value over certain number

# 說明
簡單的Apps Script 可供Google表單欄位加總超過一定數值後，關閉表單回覆

# 設定

1. 事先建立好Google Form與連接好的 Google Sheet
2. 在Google Sheet中點選 **擴充功能** > **Apps Script**
3. 刪除原有編輯器裡的所有代碼，一步步定義更改代碼
   
* 定義使用的表單和試算表檔案與設定函數名稱爲 ```autoFormClose```
  ```JavaScript
  function autoFormClose() {
  //以ID定義使用的表單和試算表檔案 
  let singUpForm = FormApp.openById('你的表單ID，網站中d/.../的這一段');
  let respondSheets = SpreadsheetApp.openById('你的表單ID，網站中d/.../的這一段');
  //指定使用特定的Sheet
  let calSheet = respondSheets.getSheetByName('帶有表單回應icon的表單名稱');

* 決定要使用的欄位
  ```JavaScript
  //預存空變數，可以儲存數字
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

4. 將程式碼部署到GCP運作  
* 右上角 **部署** > **新增部署作業**
* 執行身份：使用這個程式碼與資料的權限是那一位使用者
* 誰可以存取：這個程式嗎想要給誰使用（如果表單是給不特定人，需要選擇選「所有人」）

5. 最後一步，加入觸發條件  
   [apps script](https://script.google.com/) 左方有一個時鐘圖案
   * 選擇和第三點相同的函數作爲「執行的功能」
   * 選擇應執行的部署作業「上端」（就是最後一個部署的，如果是初次部署就不用特別設定）
   * 選取活動來源「試算表」
   * 選取活動類型，看你需要什麼時候執行一次函數，表單提交後才執行，可以選擇「提交表單時」
   * 儲存
  
#大公告成
有空再來加工有圖片的版本～
      
