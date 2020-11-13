## 文件上传组件

上传各种图片文档等资源到服务器的组件  

---

### 默认显示

<slot name="t1"></slot>

### 自定义选择文件按钮或者图片

<slot name="t2"></slot>

### 3.预览图片，并手动上传
 预览图片，需要设置
      <strong>preview</strong>属性为true，设置当前属性后，每次选择文件后，会触发
      <strong>upload-preview</strong
      >事件，该事件中e.currentTarget.result会有当前选择文件的base64信息
<slot name="t3"></slot>
> 建议使用当前属性只适用于图片和文本等小文件。大文件不建议使用

### 错误处理
 如果组件出现错误，会通过
      <strong>upload-error</strong>
      事件传递出错误信息，错误内容包括上传错误，文件选择错误，组件内部错误等

### 多文件选择  

多文件选择上传，需要设置组件属性<strong>multiple</strong>为true,设置后，可以同时选择多个文件。

### 拖拽上传  

> todo 暂时未实现

---

## 属性

| 参数     | 说明                                                  | 类型   | 可选值 | 默认  |
| -------- | ----------------------------------------------------- | ------ | ------ | ----- |
| server   | 服务器地址                                            | string |        |       |
| auto     | 是否自动上传                                          | bool   |        | true  |
| allow    | 允许文件 类型 用竖线分割 如jpg\|png\|gif,默认全部类型 | string |        |       |
| preview  | 是否预览,开启后，选择文件会触发upload-preview事件     | bool   |        | false |
| maxsize  | 文件大小限制 ，单位kb ，默认不限制                    | number |        | 0     |
| multiple | 是否允许一次选择多个文件                              | bool   |        | false |

## 事件



| 名称           | 说明                                | 回调参数                                                     |
| -------------- | ----------------------------------- | ------------------------------------------------------------ |
| upload-preview | 开启preview后，选择文件会触发本事件 | 使用e.currentTarget.result可获得文件内容                     |
| upload-success | 上传文件成功                        | 回调XMLHttpRequest请求的全部结果，上传后服务器返回的文件地址可在本事件处理 |
| upload-error   | 上传文件错误                        | 回调格式{code:,msg:'',e:e} code为错误码 msg为组件提示信息，e为具体错误的信息 |

### 服务器代码示例
#### C#
``` csharp
[HttpPost("/upload")]
public async Task<IActionResult> Upload([FromServices] IWebHostEnvironment host)
{
      var files = Request.Form.Files;
      long size = files.Sum(f => f.Length);
      List<string> list = new List<string>();
      foreach (var formFile in files)
      {
            if (formFile.Length > 0)
            {
                  var path = Path.Combine(host.WebRootPath, "files");
                  
                  if (!Directory.Exists(path))
                  {
                  Directory.CreateDirectory(path);
                  }
                  string fileName = $"{Guid.NewGuid():N}{Path.GetExtension(formFile.FileName)}";
                  path = Path.Combine(path, fileName);
                  var filePath = path;

                  using var stream = System.IO.File.Create(filePath);
                  await formFile.CopyToAsync(stream);
                  var c = Path.VolumeSeparatorChar;
                  list.Add($"{Request.Scheme}://{Request.Host.Value}/{Path.Combine("files", fileName).Replace(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)}");
            }
      }

return Ok(new { list = list, size });
}
```

