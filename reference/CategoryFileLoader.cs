// CategoryFileLoader.cs
// 사용자 정의 카테고리 — txt 파일 로드
using UnityEngine;
using TMPro;

public class CategoryFileLoader : MonoBehaviour
{
    public TextMeshProUGUI statusText;

    public void OnLoadFilePressed()
    {
        NativeFilePicker.PickFile(OnFilePicked, new string[]{ "text/plain" });
    }

    void OnFilePicked(string path)
    {
        if (path == null) return;

        string raw = System.IO.File.ReadAllText(path, System.Text.Encoding.UTF8);
        var words = raw.Split(new char[]{'\n', ',', '\r'},
                              System.StringSplitOptions.RemoveEmptyEntries);

        if (GameData.I) GameData.I.customWords = words;

        if (statusText)
            statusText.text = $"✓ {words.Length}개 단어 로드됨";

        Debug.Log($"[CategoryFileLoader] {words.Length}개 단어 로드: {path}");
    }
}
