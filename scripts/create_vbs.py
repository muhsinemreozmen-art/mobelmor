import subprocess

# Let's check with Windows Script Host (cscript / jscript) which is built-in on all Windows machines!
vbs_code = """
Dim fso, file, jsCode
Set fso = CreateObject("Scripting.FileSystemObject")
Set file = fso.OpenTextFile("js/detail.js", 1)
jsCode = file.ReadAll
file.Close

On Error Resume Next
ExecuteGlobal jsCode
If Err.Number <> 0 Then
    WScript.Echo "Error: " & Err.Description & " (Line " & Err.Line & ")"
Else
    WScript.Echo "OK"
End If
"""
with open("scripts/validate_jscript.vbs", "w", encoding="utf-8") as f:
    f.write(vbs_code)
