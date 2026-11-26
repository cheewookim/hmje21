// CategoryDatabase.cs
// 훈민정음21 카테고리 시스템 (개발계획서 v2.5 §5)
// 카테고리 = 게임 시작 전 사용자가 선택하는 테마
// 선택된 카테고리의 단어/문장이 전 단계에 공통 적용

using System.Collections.Generic;

public enum Category
{
    All,             // 전체 (기본)
    KoreanFood,      // 한국음식
    KoreanTravel,    // 한국여행
    KoreanPlaces,    // 한국지명
    KoreanTransport, // 한국교통
    KoreanMountains, // 한국의 산 (100대 명산)
    BasicWords,      // 기초단어
    BodyEmotion,     // 신체/감정
    KPop,            // K-pop 문화
    Proverbs,        // 한국 속담
    Custom           // 사용자 정의
}

public static class CategoryDatabase
{
    public static readonly Dictionary<Category, string> DisplayNames = new()
    {
        { Category.All,             "DB전체" },
        { Category.KoreanFood,      "한국음식" },
        { Category.KoreanTravel,    "한국여행" },
        { Category.KoreanTransport, "한국교통" },
        { Category.KoreanPlaces,    "한국지명" },
        { Category.KoreanMountains, "한국의 산" },
        { Category.BasicWords,      "기초한국어" },
        { Category.BodyEmotion,     "몸과 마음" },
        { Category.KPop,            "K-Wave" },
        { Category.Proverbs,        "한국 속담" },
        { Category.Custom,          "사용자 정의" },
    };

    // ── 카테고리별 단어 목록 ────────────────────────────────────────────────

    public static readonly string[] KoreanFood = {
        "밥","국","떡","죽","탕","찌개","볶음","구이","무침","전",
        "김치","비빔밥","불고기","삼겹살","냉면","된장","고추장",
        "떡볶이","김밥","갈비","순대","보쌈","족발","삼계탕","설렁탕",
        "된장찌개","김치찌개","순두부","해장국","곰탕","갈비탕",
        "잡채","소금","설탕","후추","간장","참기름","식초","마늘","생강",
        "쌀","보리","콩","팥","감자","고구마","당근","오이","배추","무"
    };

    public static readonly string[] KoreanTravel = {
        "경복궁","창덕궁","덕수궁","불국사","석굴암","첨성대",
        "한라산","설악산","지리산","태백산","소백산",
        "제주도","독도","울릉도","거제도","남해","서해","동해",
        "명동","인사동","홍대","강남","이태원","북촌","남산",
        "호텔","게스트하우스","민박","관광","여행","숙박",
        "여권","비자","환전","가방","카메라","지도","안내","투어"
    };

    public static readonly string[] KoreanPlaces = {
        "서울","부산","인천","대구","광주","대전","울산","세종",
        "수원","성남","고양","용인","창원","청주","전주","천안",
        "강릉","속초","춘천","원주","포항","경주","구미","안동",
        "목포","여수","순천","진주","거제","통영",
        "경기","강원","충북","충남","전북","전남","경북","경남","제주"
    };

    public static readonly string[] KoreanTransport = {
        "지하철","버스","기차","택시","비행기","배","자동차","자전거",
        "역","공항","항구","터미널","정류장","주차장",
        "환승","노선","출발","도착","승차","하차",
        "교통카드","요금","시간표","급행","완행","직행"
    };

    /// <summary>한국의 산 — 산림청 지정 100대 명산</summary>
    public static readonly string[] KoreanMountains = {
        // 강원
        "설악산","치악산","태백산","오대산","두타산","방태산","덕항산",
        "가리왕산","계방산","점봉산","백덕산","청량산","발왕산","매봉산",
        // 경기/인천
        "북한산","관악산","용문산","명지산","화악산","운악산","감악산",
        "마니산","도봉산","수락산","불암산","아차산",
        // 충북/충남
        "속리산","월악산","소백산","민주지산","금수산","구병산","칠갑산",
        "대둔산","계룡산","오서산",
        // 경북/대구
        "주왕산","가야산","팔공산","비슬산","운문산","황악산","보현산",
        "백암산","구미산","도덕산",
        // 경남/부산/울산
        "지리산","덕유산","가지산","신불산","천황산","재약산","황석산",
        "금산","남해금산","천성산","정족산","간월산","영축산","고헌산",
        // 전북/전남
        "덕유산","무등산","내장산","두륜산","월출산","조계산","천관산",
        "방장산","입암산","추월산","백운산","존재산","모악산","변산",
        // 제주
        "한라산","성산일출봉","산방산","군산","천아오름",
        // 서울/경기 추가
        "청계산","광교산","소요산","천마산","유명산","용화산",
        // 전국 주요 명산
        "지리산","한라산","설악산","덕유산","오대산","속리산","가야산",
        "내장산","월출산","무등산","계룡산","북한산","소백산","주왕산",
        "치악산","월악산","태백산","두타산","대둔산","팔공산"
    };

    public static readonly string[] BasicWords = {
        // 숫자
        "하나","둘","셋","넷","다섯","여섯","일곱","여덟","아홉","열",
        "백","천","만","억",
        // 색깔
        "빨강","주황","노랑","초록","파랑","남색","보라","흰색","검정","회색","분홍",
        // 요일
        "월요일","화요일","수요일","목요일","금요일","토요일","일요일",
        // 날씨
        "맑음","흐림","비","눈","바람","안개","천둥","번개","태풍","황사",
        // 가족
        "아버지","어머니","아들","딸","형","누나","오빠","언니","동생",
        "할아버지","할머니","남편","아내","부모","가족"
    };

    public static readonly string[] BodyEmotion = {
        // 신체
        "머리","얼굴","눈","코","입","귀","목","어깨","팔","손",
        "가슴","배","허리","다리","무릎","발","등","피부",
        // 감정
        "기쁨","슬픔","화남","두려움","놀람","부끄러움","설렘",
        "행복","불행","외로움","그리움","사랑","미움","질투"
    };

    public static readonly string[] KPop = {
        // 장르/문화 일반 단어 (특정 가수·그룹명 제외 — 저작권/상표권)
        "노래","음악","멜로디","리듬","가사","춤","무대","콘서트","앨범","공연",
        "데뷔","아이돌","팬","팬덤","응원","한류","안무","보컬","래퍼","밴드",
        "작곡","작사","편곡","녹음","방송","팬미팅","사인회","뮤직비디오",
        "기타","드럼","피아노","베이스","마이크","스피커",
        "발라드","댄스","힙합","재즈","클래식","록","팝","트로트"
    };

    public static readonly string[] Proverbs = {
        "가는말","오는말","낮말","밤말","새","쥐","호랑이","토끼","거북","개구리",
        "하늘","땅","바다","산","강","나무","꽃","씨","열매","뿌리",
        "배","등","눈","귀","입","손","발","머리","마음","힘",
        "시작","끝","처음","마지막","앞","뒤","위","아래","안","밖"
    };

    // ── 카테고리 단어 반환 ──────────────────────────────────────────────────
    public static string[] GetWords(Category cat)
    {
        return cat switch
        {
            Category.KoreanFood      => KoreanFood,
            Category.KoreanTravel    => KoreanTravel,
            Category.KoreanPlaces    => KoreanPlaces,
            Category.KoreanTransport => KoreanTransport,
            Category.KoreanMountains => KoreanMountains,
            Category.BasicWords      => BasicWords,
            Category.BodyEmotion     => BodyEmotion,
            Category.KPop            => KPop,
            Category.Proverbs        => Proverbs,
            Category.Custom          => GameData.I?.customWords ?? new string[0],
            _                        => null  // All → WordDatabase 기본값 사용
        };
    }

    public static string GetDisplayName(Category cat)
    {
        return DisplayNames.TryGetValue(cat, out string name) ? name : cat.ToString();
    }
}
