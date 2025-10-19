export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  image: string;
  tags: string[];
  excerpt: string;
  content: string;
  link: string;
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

export const postsData: Record<'en' | 'vi', BlogPost[]> = {
  // =================================================================
  // =============== 🇺🇸 ENGLISH BLOG POSTS ===========================
  // =================================================================
  vi: [
    {
      title: "1️⃣ Giới thiệu ngôn ngữ lập trình Java – Bước đầu cho người mới",
      slug: "gioi-thieu-java-co-ban",
      date: "2025-10-15",
      image: "/images/posts/1.jpg",
      tags: ["Java", "OOP", "Beginner", "Programming"],
      excerpt:
        "Hành trình khám phá Java – từ ngôn ngữ 'Write Once, Run Anywhere' đến nền tảng của Android và hệ thống doanh nghiệp lớn.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Chào mừng bạn đến với thế giới của 
        <strong class="text-blue-600 dark:text-blue-400">Java</strong> – 
        một trong những ngôn ngữ lập trình mạnh mẽ và phổ biến nhất hành tinh! 
        Được phát triển bởi <strong>Sun Microsystems</strong> vào năm 1995, Java đã nhanh chóng trở thành xương sống của nhiều hệ thống công nghệ,
        từ ứng dụng di động đến các giải pháp doanh nghiệp quy mô lớn.
      </p>

      <p>
        Bài viết này sẽ là kim chỉ nam đầu tiên, giúp bạn hiểu rõ về Java, những lợi ích khi học nó, và khám phá lý do vì sao 
        Java vẫn giữ vững vị thế quan trọng trong ngành công nghiệp phần mềm hiện đại.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-8 border-l-4 border-blue-500 dark:border-blue-400 pl-3">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu rõ nguồn gốc và triết lý "Write Once, Run Anywhere" của Java.</li>
        <li>Nắm bắt các đặc điểm nổi bật khiến Java trở thành lựa chọn hàng đầu cho nhiều loại dự án.</li>
        <li>Khám phá các lĩnh vực ứng dụng thực tế của Java trong đời sống và công nghiệp.</li>
        <li>Biết được những lý do thuyết phục để bắt đầu hành trình học Java ngay hôm nay.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-10 border-l-4 border-purple-500 dark:border-purple-400 pl-3">
        💡 Tại sao Java vẫn là lựa chọn bền vững?
      </h2>
      <p>
        Java không chỉ là một ngôn ngữ; đó là cả một hệ sinh thái mạnh mẽ. Dưới đây là những lý do chính bạn nên cân nhắc học Java:
      </p>

      <ul class="list-disc ml-6 space-y-3">
        <li>
          <strong>Đa nền tảng (Platform Independent):</strong> 
          Nhờ có <span class="font-semibold text-blue-500 dark:text-blue-300">Máy ảo Java (JVM)</span>, 
          mã Java bạn viết có thể chạy trên hầu hết mọi thiết bị có JVM — từ máy tính để bàn, server đến thiết bị nhúng.  
          Đây chính là hiện thực của khẩu hiệu <em>"Write Once, Run Anywhere"</em>.
        </li>
        <li>
          <strong>Ứng dụng rộng rãi:</strong>
          <ul class="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Phát triển Android:</strong> Java là ngôn ngữ chính thức để xây dựng ứng dụng Android.</li>
            <li><strong>Hệ thống doanh nghiệp:</strong> Các tập đoàn lớn như ngân hàng, tài chính, bảo hiểm dùng Java (Spring Boot) để xây dựng hệ thống mạnh mẽ.</li>
            <li><strong>Big Data & AI:</strong> Nhiều công cụ trong Big Data (như Hadoop, Spark) viết bằng Java.</li>
            <li><strong>IoT:</strong> Java cũng có mặt trong các thiết bị thông minh, từ TV đến hệ thống tự động hóa.</li>
          </ul>
        </li>
        <li><strong>Hỗ trợ OOP mạnh mẽ:</strong> Giúp code rõ ràng, dễ bảo trì, dễ mở rộng.</li>
        <li><strong>Cộng đồng lớn:</strong> Hàng triệu lập trình viên Java toàn cầu, nhiều tài liệu, khóa học, hỗ trợ nhanh chóng.</li>
        <li><strong>Công cụ phong phú:</strong> IDE (IntelliJ, Eclipse), thư viện, framework (Spring, Hibernate, Maven).</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 mt-10 border-l-4 border-green-500 dark:border-green-400 pl-3">
        ⚙️ Các đặc điểm kỹ thuật nổi bật của Java
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Quản lý bộ nhớ tự động (Garbage Collection):</strong> Giúp tránh rò rỉ bộ nhớ và giảm lỗi.</li>
        <li><strong>Xử lý ngoại lệ (Exception Handling):</strong> Viết code an toàn, kiểm soát lỗi chuyên nghiệp.</li>
        <li><strong>Bảo mật cao:</strong> Tính năng bảo mật tích hợp sẵn, an toàn cho môi trường doanh nghiệp.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-10 border-l-4 border-orange-500 dark:border-orange-400 pl-3">
        🚀 Bắt đầu hành trình Java của bạn
      </h2>
      <p>
        Nếu bạn đang tìm kiếm một ngôn ngữ có tính ứng dụng cao, ổn định, và mở ra nhiều cơ hội nghề nghiệp trong các lĩnh vực 
        phát triển backend, Android hoặc hệ thống doanh nghiệp — 
        <strong class="text-blue-600 dark:text-blue-400">Java</strong> chính là lựa chọn hoàn hảo.
      </p>
      <p>
        Hãy cùng nhau khám phá sâu hơn về Java trong các bài viết tiếp theo!
      </p>
    </div>
  `,
      link: "https://www.netacad.com/vi/courses/java-programming",
      relatedLinks: [
        {
          title: "Khóa học Java cơ bản – NetAcad",
          url: "https://www.netacad.com/vi/courses/java-programming",
        },
        {
          title: "Lập trình hướng đối tượng với Java – W3Schools",
          url: "https://www.w3schools.com/java/java_oop.asp",
        },
        {
          title: "Spring Boot Tutorial – Baeldung",
          url: "https://www.baeldung.com/spring-boot",
        },
      ],
    },

    {
      title: "2️⃣ Cấu trúc chương trình Java & cú pháp cơ bản",
      slug: "cau-truc-chuong-trinh-java",
      date: "2025-10-15",
      image: "/images/posts/2.jpg",
      tags: ["Java", "Syntax", "Beginner", "Structure"],
      excerpt:
        "Nắm vững những viên gạch đầu tiên của Java: từ cách một chương trình được tổ chức đến cú pháp viết code cơ bản nhất.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Để bắt đầu viết mã <strong class="text-blue-600 dark:text-blue-400">Java</strong>, điều quan trọng là bạn phải hiểu cấu trúc cơ bản của một chương trình Java và những quy tắc cú pháp cần tuân thủ.  
        Bài viết này sẽ giúp bạn xây dựng chương trình <em>"Hello World"</em> đầu tiên và giải thích từng thành phần nhỏ nhất.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu cấu trúc cốt lõi của một chương trình Java bao gồm class và method.</li>
        <li>Nắm rõ vai trò của phương thức <code>main()</code> – điểm khởi đầu của mọi ứng dụng Java.</li>
        <li>Biết cách sử dụng <code>System.out.println()</code> để hiển thị thông tin ra màn hình.</li>
        <li>Tìm hiểu các quy tắc cú pháp cơ bản như dấu chấm phẩy, tên file và quy ước đặt tên.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🧠 Cấu trúc một chương trình Java đơn giản
      </h2>
      <p>
        Mỗi chương trình Java đều được xây dựng dựa trên các lớp (<em>classes</em>).  
        Một ứng dụng Java tối thiểu sẽ bao gồm một lớp và một phương thức đặc biệt gọi là <code>main()</code> — nơi chương trình bắt đầu thực thi.
      </p>

      <h3 class="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">📄 Ví dụ: Chương trình "Hello World" kinh điển</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
public class HelloWorld { // Khai báo một class có tên HelloWorld
    public static void main(String[] args) { // Điểm khởi đầu của chương trình
        System.out.println("Xin chào, Java!"); // In thông báo ra màn hình console
    } // Kết thúc phương thức main
} // Kết thúc class HelloWorld
      </code></pre>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        📌 Giải thích chi tiết các thành phần
      </h2>
      <ul class="list-disc ml-6 space-y-4">
        <li>
          <code class="font-semibold text-blue-500 dark:text-blue-300">public class HelloWorld</code>:
          <ul class="list-disc ml-6 mt-2 space-y-1">
            <li><code>public</code>: Cho phép class được truy cập từ bất kỳ đâu.</li>
            <li><code>class</code>: Từ khóa dùng để định nghĩa một lớp.</li>
            <li><code>HelloWorld</code>: Tên của lớp. Trong Java, tên file phải trùng với tên class chứa phương thức <code>main</code> (ví dụ: <code>HelloWorld.java</code>).</li>
          </ul>
        </li>

        <li>
          <code class="font-semibold text-blue-500 dark:text-blue-300">public static void main(String[] args)</code>:  
          Là phương thức chính, nơi **Máy ảo Java (JVM)** bắt đầu thực thi code.
          <ul class="list-disc ml-6 mt-2 space-y-1">
            <li><code>public</code>: Cho phép JVM gọi phương thức này.</li>
            <li><code>static</code>: Cho phép gọi phương thức mà không cần tạo đối tượng.</li>
            <li><code>void</code>: Phương thức không trả về giá trị nào.</li>
            <li><code>main</code>: Tên bắt buộc của phương thức khởi đầu.</li>
            <li><code>(String[] args)</code>: Mảng chuỗi dùng để nhận tham số dòng lệnh.</li>
          </ul>
        </li>

        <li>
          <code class="font-semibold text-blue-500 dark:text-blue-300">System.out.println("Xin chào, Java!");</code>:
          <ul class="list-disc ml-6 mt-2 space-y-1">
            <li><code>System</code>: Class có sẵn trong Java, cung cấp các tiện ích hệ thống.</li>
            <li><code>out</code>: Trường tĩnh đại diện cho luồng đầu ra chuẩn (console).</li>
            <li><code>println()</code>: Phương thức in chuỗi hoặc giá trị ra console và xuống dòng.</li>
          </ul>
        </li>
      </ul>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        📝 Quy tắc cú pháp & ghi nhớ quan trọng
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Mỗi câu lệnh Java kết thúc bằng dấu chấm phẩy (<code>;</code>).</li>
        <li>Các khối mã được bao quanh bởi dấu ngoặc nhọn (<code>{ }</code>).</li>
        <li>Java phân biệt chữ hoa và chữ thường (<em>case-sensitive</em>).</li>
        <li>Dùng comment (<code>//</code> hoặc <code>/* ... */</code>) để ghi chú giải thích code.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-pink-600 dark:text-pink-400 border-l-4 border-pink-500 dark:border-pink-400 pl-3 mt-10">
        🚀 Tiếp theo bạn sẽ học gì?
      </h2>
      <p>
        Với nền tảng vững chắc về cấu trúc và cú pháp cơ bản, bạn đã sẵn sàng đi sâu hơn vào các khái niệm quan trọng như 
        <strong class="text-blue-600 dark:text-blue-400">biến</strong>, 
        <strong class="text-blue-600 dark:text-blue-400">kiểu dữ liệu</strong>, 
        <strong class="text-blue-600 dark:text-blue-400">toán tử</strong> và đặc biệt là 
        <strong class="text-blue-600 dark:text-blue-400">Lập trình hướng đối tượng (OOP)</strong> – trái tim của Java.
      </p>
      <p>Hãy tiếp tục khám phá để xây dựng những ứng dụng Java mạnh mẽ đầu tiên!</p>
    </div>
  `,
      link: "https://www.w3schools.com/java/java_syntax.asp",
      relatedLinks: [
        {
          title: "Java Syntax – W3Schools",
          url: "https://www.w3schools.com/java/java_syntax.asp",
        },
        {
          title: "Java Basics – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/java-programming-basics/",
        },
      ],
    },
    {
      title: "3️⃣ Lập trình hướng đối tượng trong Java (OOP)",
      slug: "lap-trinh-huong-doi-tuong-java",
      date: "2025-10-15",
      image: "/images/posts/3.jpg",
      tags: ["Java", "OOP", "Class", "Object"],
      excerpt:
        "Khám phá 4 trụ cột cơ bản của OOP (Encapsulation, Inheritance, Polymorphism, Abstraction) và cách Java hiện thực hóa chúng qua ví dụ cụ thể.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Lập trình hướng đối tượng
        <strong class="text-blue-600 dark:text-blue-400">(OOP)</strong>
        là một trong những khái niệm quan trọng nhất và là cốt lõi của Java.
        Nó giúp chúng ta tổ chức code một cách logic, dễ hiểu, dễ mở rộng và bảo trì hơn.
        Bài viết này sẽ đưa bạn đi qua 4 trụ cột chính của OOP và cách Java áp dụng chúng.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu sâu sắc 4 nguyên tắc cơ bản của OOP: Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism), và Trừu tượng (Abstraction).</li>
        <li>Nắm được cách Java hiện thực hóa từng nguyên tắc thông qua các ví dụ code minh họa.</li>
        <li>Biết được lợi ích của việc áp dụng OOP trong việc xây dựng các ứng dụng phức tạp.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🏛️ 4 Trụ cột của OOP trong Java
      </h2>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
        1. Đóng gói (Encapsulation)
      </h3>
      <p>Đóng gói là cơ chế ẩn dữ liệu (thuộc tính) và các phương thức xử lý dữ liệu đó trong một lớp duy nhất, chỉ để lộ các phương thức cần thiết để tương tác từ bên ngoài. Nó giúp bảo vệ dữ liệu khỏi sự truy cập không mong muốn và làm code mô-đun, dễ quản lý hơn.</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        if (newName != null && !newName.trim().isEmpty()) {
            this.name = newName;
        } else {
            System.out.println("Tên không hợp lệ!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setName("Alice");
        System.out.println(s1.getName());
        s1.setName("");
    }
}
      </code></pre>
      <p><strong>Lợi ích:</strong> Bảo vệ dữ liệu, kiểm soát truy cập, tăng tính linh hoạt và dễ bảo trì.</p>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
        2. Kế thừa (Inheritance)
      </h3>
      <p>Kế thừa cho phép một lớp (subclass) kế thừa các thuộc tính và phương thức từ một lớp khác (superclass). Điều này thúc đẩy việc tái sử dụng mã (code reusability) và tạo ra mối quan hệ "is-a".</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
// Lớp cha
class Animal {
    void eat() {
        System.out.println("Động vật đang ăn.");
    }
    void sleep() {
        System.out.println("Động vật đang ngủ.");
    }
}

// Lớp con kế thừa
class Dog extends Animal {
    void bark() {
        System.out.println("Gâu gâu!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();
        myDog.bark();
    }
}
      </code></pre>
      <p><strong>Lợi ích:</strong> Tái sử dụng mã, giảm trùng lặp, tạo cấu trúc phân cấp rõ ràng.</p>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
        3. Đa hình (Polymorphism)
      </h3>
      <p>Đa hình cho phép các đối tượng thuộc các lớp khác nhau phản ứng khác nhau với cùng một phương thức. Trong Java, nó được hiện thực qua override và interface.</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meo meo!");
    }
}

class Duck extends Animal {
    @Override
    void makeSound() {
        System.out.println("Quạc quạc!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myCat = new Cat();
        Animal myDuck = new Duck();

        myCat.makeSound();
        myDuck.makeSound();
    }
}
      </code></pre>
      <p><strong>Lợi ích:</strong> Linh hoạt, dễ mở rộng, xử lý đối tượng khác nhau theo cùng 1 cách.</p>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
        4. Trừu tượng (Abstraction)
      </h3>
      <p>Trừu tượng là quá trình ẩn đi chi tiết phức tạp và chỉ hiển thị thông tin cần thiết. Trong Java, điều này được thực hiện bằng abstract class và interface.</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
abstract class Shape {
    String color;
    Shape(String color) { this.color = color; }
    abstract double area();
    public String getColor() { return color; }
}

class Circle extends Shape {
    double radius;
    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape myCircle = new Circle("Red", 5.0);
        System.out.println("Màu sắc: " + myCircle.getColor());
        System.out.println("Diện tích: " + myCircle.area());
    }
}
      </code></pre>
      <p><strong>Lợi ích:</strong> Giúp hệ thống đơn giản, tập trung vào “cái gì” thay vì “như thế nào”.</p>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🚀 Tầm quan trọng của OOP
      </h2>
      <p>Hiểu vững OOP giúp bạn viết code dễ đọc, dễ mở rộng và bảo trì. Đây là nền tảng để xây dựng ứng dụng Java quy mô lớn, bền vững và hiệu quả. Hãy thực hành thật nhiều để biến OOP thành bản năng của bạn!</p>
    </div>
  `,
      link: "https://www.netacad.com/vi/courses/java-programming",
      relatedLinks: [
        {
          title: "Java OOP Concepts – W3Schools",
          url: "https://www.w3schools.com/java/java_oop.asp",
        },
        {
          title: "Inheritance in Java – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/inheritance-in-java/",
        },
      ],
    },

    {
      title: "4️⃣ JavaScript Essentials 1 – Làm quen với ngôn ngữ của Web",
      slug: "javascript-essentials-1",
      date: "2025-10-15",
      image: "/images/posts/4.png",
      tags: ["JavaScript", "Frontend", "DOM", "WebDev", "Beginner"],
      excerpt:
        "Bước chân vào thế giới của JavaScript – ngôn ngữ không thể thiếu để tạo ra các trang web động, tương tác và sống động.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Chào mừng bạn đến với <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong>
        – trái tim của mọi trang web hiện đại! Nếu HTML cung cấp cấu trúc và CSS tạo phong cách,
        thì JavaScript mang lại sự sống động, cho phép trang web của bạn tương tác với người dùng và thực hiện các tác vụ phức tạp.
        Bài viết này sẽ giúp bạn làm quen với những khái niệm cơ bản nhất của JavaScript và hiểu tại sao nó lại quan trọng đến vậy.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu vai trò của JavaScript trong phát triển web hiện đại.</li>
        <li>Biết cách nhúng JavaScript vào trang HTML của bạn.</li>
        <li>Làm quen với cú pháp cơ bản của JavaScript.</li>
        <li>Học cách tương tác với các phần tử HTML (DOM Manipulation) và xử lý sự kiện (Event Handling).</li>
        <li>Xây dựng ví dụ "Hello World" đầu tiên với JavaScript.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🪄 JavaScript là gì và tại sao lại quan trọng?
      </h2>
      <p>
        JavaScript là ngôn ngữ lập trình kịch bản chạy trực tiếp trong trình duyệt của người dùng.
        Nó không cần biên dịch như Java mà được trình duyệt thông dịch và thực thi ngay lập tức.
      </p>
      <p><strong>Tầm quan trọng:</strong></p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Tạo tương tác:</strong> JavaScript cho phép bạn tạo ra các nút bấm, menu, form kiểm tra dữ liệu, carousel ảnh, v.v.</li>
        <li><strong>Điều khiển DOM:</strong> Có thể truy cập và thay đổi nội dung, cấu trúc và kiểu dáng của HTML qua <strong>Document Object Model (DOM)</strong>.</li>
        <li><strong>Full-stack:</strong> Với Node.js, JavaScript không chỉ ở frontend mà còn dùng ở backend.</li>
        <li><strong>Thư viện & Framework:</strong> React, Vue, Angular... giúp bạn xây dựng UI mạnh mẽ.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        📚 Ví dụ đầu tiên: Tương tác với HTML qua DOM và Event
      </h2>
      <p>
        Ví dụ này minh họa cách JavaScript làm cho trang web trở nên “sống”.
        Khi click vào nút, một thông báo sẽ xuất hiện.
      </p>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Mã HTML (index.html)</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="vi"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;JavaScript First Step&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Chào mừng đến với JavaScript!&lt;/h1&gt;
    &lt;button id="myButton"&gt;Click vào đây!&lt;/button&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Mã JavaScript (script.js)</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Chọn phần tử button bằng ID của nó
const myButton = document.querySelector("#myButton");

// Gắn sự kiện 'click' vào nút
myButton.addEventListener("click", () => {
  alert("Xin chào, JavaScript! Bạn vừa click vào nút.");
  // alert() hiển thị hộp thoại thông báo
});

console.log("JavaScript đã tải thành công!");
      </code></pre>

      <p><strong>Giải thích:</strong></p>
      <ul class="list-disc ml-6 space-y-2">
        <li><code>document.querySelector("#myButton")</code>: Truy cập phần tử HTML có <code>id="myButton"</code>.</li>
        <li><code>addEventListener("click", ...)</code>: Gắn “người nghe sự kiện” cho nút.</li>
        <li><code>alert()</code>: Hiển thị hộp thoại thông báo trên trình duyệt.</li>
      </ul>
      <p>
        Chỉ với vài dòng code, bạn đã khiến trang HTML tĩnh trở nên tương tác.
        Đó chính là sức mạnh của <strong>DOM Manipulation</strong> và <strong>Event Handling</strong>.
      </p>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Bắt đầu hành trình với JavaScript
      </h2>
      <p>
        Đây chỉ là điểm khởi đầu! JavaScript còn vô vàn khái niệm khác như biến, vòng lặp, điều kiện, và lập trình hướng đối tượng.
        Hãy luyện tập thường xuyên để biến ý tưởng của bạn thành hiện thực trên web!
      </p>
    </div>
  `,
      link: "https://www.netacad.com/vi/courses/javascript-essentials-1",
      relatedLinks: [
        {
          title: "Khóa học JavaScript Essentials 1 – NetAcad",
          url: "https://www.netacad.com/vi/courses/javascript-essentials-1",
        },
        {
          title: "Learn JavaScript – MDN Web Docs",
          url: "https://developer.mozilla.org/vi/docs/Learn/JavaScript",
        },
      ],
    },

    {
      title: "5️⃣ Biến, kiểu dữ liệu và toán tử trong JavaScript",
      slug: "bien-va-kieu-du-lieu-javascript",
      date: "2025-10-15",
      image: "/images/posts/5.jpg",
      tags: ["JavaScript", "Variables", "Basics", "DataTypes", "Operators"],
      excerpt:
        "Hiểu rõ cách lưu trữ, quản lý dữ liệu với biến (var, let, const), các kiểu dữ liệu cơ bản và cách thực hiện tính toán trong JavaScript.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Trong lập trình, dữ liệu là cốt lõi. Để xử lý dữ liệu, chúng ta cần các
        <strong class="text-blue-600 dark:text-blue-400">biến</strong> để lưu trữ,
        <strong class="text-blue-600 dark:text-blue-400">kiểu dữ liệu</strong> để phân loại, và
        <strong class="text-blue-600 dark:text-blue-400">toán tử</strong> để thực hiện các phép tính.
        Bài viết này sẽ đi sâu vào những khái niệm nền tảng này trong JavaScript.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Phân biệt và sử dụng đúng <code>var</code>, <code>let</code>, và <code>const</code> khi khai báo biến.</li>
        <li>Nắm vững các kiểu dữ liệu nguyên thủy (primitive) và kiểu dữ liệu đối tượng (object) trong JavaScript.</li>
        <li>Hiểu cách hoạt động của các toán tử số học, so sánh, logic và gán.</li>
        <li>Áp dụng kiến thức để viết các đoạn code JavaScript cơ bản.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🔄 Biến: Lưu trữ dữ liệu trong JavaScript
      </h2>
      <p>Biến là những "hộp" dùng để lưu trữ dữ liệu. Trong JavaScript, chúng ta có ba từ khóa chính để khai báo biến.</p>

      <div class="space-y-6 mt-4">
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>var</code> - Biến cũ, phạm vi hàm (function scope)</h3>
          <p class="mt-2"><code>var</code> là cách khai báo biến truyền thống, có phạm vi hoạt động theo hàm. Ngày nay, nên hạn chế sử dụng trong code mới.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
var greeting = "Hello";
function sayHi() {
    var greeting = "Hi"; // Biến này chỉ tồn tại trong hàm sayHi
    console.log(greeting); // Output: "Hi"
}
sayHi();
console.log(greeting); // Output: "Hello"
          </code></pre>
        </div>
        
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>let</code> - Biến mới, phạm vi khối (block scope)</h3>
          <p class="mt-2"><code>let</code> cho phép khai báo biến có thể thay đổi giá trị, với phạm vi trong khối lệnh <code>{}</code>. Đây là lựa chọn thay thế hiện đại cho <code>var</code>.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
let count = 0;
if (true) {
    let count = 1; // Biến 'count' này chỉ tồn tại trong khối if
    console.log(count); // Output: 1
}
console.log(count); // Output: 0
          </code></pre>
        </div>

        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>const</code> - Hằng số, phạm vi khối (block scope)</h3>
          <p class="mt-2"><code>const</code> dùng để khai báo hằng số, giá trị không thể gán lại. Nó cũng có phạm vi khối như <code>let</code>.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const PI = 3.14159;
// PI = 3.14; // Lỗi: Assignment to constant variable.

const user = { name: "Alice" };
user.name = "Bob"; // Hợp lệ! Chúng ta thay đổi thuộc tính, không phải chính đối tượng.
console.log(user.name); // Output: "Bob"
          </code></pre>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
        <p class="font-semibold text-blue-800 dark:text-blue-300">💡 Lời khuyên:</p>
        <p class="text-blue-700 dark:text-blue-400">Hãy ưu tiên dùng <code>const</code>. Nếu bạn biết giá trị của biến sẽ cần thay đổi, hãy dùng <code>let</code>. Tránh sử dụng <code>var</code> để code của bạn dễ đoán và ít lỗi hơn.</p>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🧠 Kiểu dữ liệu trong JavaScript
      </h2>
      <p>JavaScript có các kiểu dữ liệu linh hoạt, phân thành hai loại chính:</p>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">1. Kiểu dữ liệu nguyên thủy (Primitive Data Types)</h3>
      <p>Đây là các kiểu dữ liệu cơ bản, không thể thay đổi (immutable).</p>
      <ul class="list-disc ml-6 space-y-2 mt-4">
          <li><strong>Number:</strong> Cho số nguyên và số thực. <code>let age = 30;</code></li>
          <li><strong>String:</strong> Cho văn bản. <code>let name = "John";</code></li>
          <li><strong>Boolean:</strong> Cho giá trị đúng/sai. <code>let isActive = true;</code></li>
          <li><strong>Undefined:</strong> Biến được khai báo nhưng chưa có giá trị.</li>
          <li><strong>Null:</strong> Biểu thị sự "trống rỗng" một cách có chủ đích.</li>
          <li><strong>Symbol:</strong> Tạo ra các giá trị định danh duy nhất.</li>
          <li><strong>BigInt:</strong> Cho các số nguyên cực lớn.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">2. Kiểu dữ liệu đối tượng (Object Data Type)</h3>
      <p>Là các cấu trúc dữ liệu phức tạp hơn.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Object: Tập hợp các cặp key-value
let person = { name: "Jane", age: 25 };

// Array: Danh sách các giá trị
let colors = ["red", "green", "blue"];
      </code></pre>
      
      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ➕➖✖️➗ Toán tử trong JavaScript
      </h2>
      <p>Toán tử là các ký hiệu dùng để thực hiện các phép toán. Dưới đây là các nhóm chính:</p>
      <ul class="list-disc ml-6 space-y-2 mt-4">
        <li><strong>Toán tử số học:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (chia lấy dư), <code>**</code> (lũy thừa).</li>
        <li><strong>Toán tử gán:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>.</li>
        <li><strong>Toán tử so sánh:</strong> <code>==</code>, <code>===</code> (nên dùng), <code>!=</code>, <code>!==</code> (nên dùng), <code>></code>, <code><</code>.</li>
        <li><strong>Toán tử logic:</strong> <code>&&</code> (VÀ), <code>||</code> (HOẶC), <code>!</code> (PHỦ ĐỊNH).</li>
      </ul>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🔗 Kết luận
      </h2>
      <p>Việc hiểu rõ về biến, kiểu dữ liệu và toán tử là nền tảng vững chắc để bạn xây dựng bất kỳ logic phức tạp nào trong JavaScript. Hãy dành thời gian thực hành với các ví dụ để củng cố kiến thức của mình.</p>
    </div>
  `,
      link: "https://www.w3schools.com/js/js_variables.asp",
      relatedLinks: [
        {
          title: "JS Variables – W3Schools",
          url: "https://www.w3schools.com/js/js_variables.asp",
        },
        {
          title: "JavaScript Data Types – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
        },
        {
          title: "JavaScript Operators – W3Schools",
          url: "https://www.w3schools.com/js/js_operators.asp",
        },
      ],
    },
    {
      title: "6️⃣ Hàm và Callback trong JavaScript",
      slug: "ham-va-callback-javascript",
      date: "2025-10-15",
      image: "/images/posts/6.jpg",
      tags: ["JavaScript", "Functions", "Callback", "Asynchronous"],
      excerpt:
        "Làm chủ sức mạnh của các hàm tái sử dụng và hiểu cách Callback giúp quản lý luồng bất đồng bộ trong JavaScript.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Trong JavaScript, <strong class="text-blue-600 dark:text-blue-400">hàm (functions)</strong>
        là những khối mã có thể tái sử dụng để thực hiện một tác vụ cụ thể. Khi kết hợp với
        <strong class="text-blue-600 dark:text-blue-400">callback</strong>,
        chúng trở thành công cụ cực kỳ mạnh mẽ để quản lý các tác vụ bất đồng bộ và tạo ra code linh hoạt.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu định nghĩa và mục đích của hàm trong JavaScript.</li>
        <li>Biết các cách khác nhau để khai báo và gọi hàm.</li>
        <li>Hiểu khái niệm và cách sử dụng hàm callback trong các tình huống thực tế.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ⚙️ Các loại Hàm trong JavaScript
      </h2>
      <p>Dưới đây là các cách phổ biến để định nghĩa một hàm trong JavaScript.</p>

      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">1. Khai báo hàm</h3>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
function greet(name) {
  return "Xin chào, " + name;
}
greet("Alice");
          </code></pre>
        </div>
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">2. Biểu thức hàm</h3>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const sayHello = function(name) {
  return "Hello, " + name;
};
sayHello("Bob");
          </code></pre>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mt-6">
        <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">3. Hàm mũi tên (Arrow Function)</h3>
        <p class="mt-2">Cung cấp cú pháp ngắn gọn hơn và có cách xử lý <code>this</code> khác biệt.</p>
        <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const add = (a, b) => a + b;
add(5, 3); // Output: 8
        </code></pre>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🧩 Callback: Hàm được truyền làm đối số
      </h2>
      <p>
        <strong>Callback</strong> là một hàm được truyền vào một hàm khác như một đối số,
        và hàm đó sẽ được thực thi sau khi một tác vụ nào đó hoàn thành.
        Đây là nền tảng của lập trình bất đồng bộ trong JavaScript.
      </p>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Ví dụ về Callback</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
function processData(data, callback) {
    console.log("Đang xử lý: " + data);
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(result);
    }, 1000);
}

function displayResult(result) {
    console.log("Kết quả là: " + result);
}

processData("xin chào", displayResult);
      </code></pre>
      
      <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
        <h4 class="font-semibold text-red-800 dark:text-red-300">🚨 Chú ý: "Callback Hell"</h4>
        <p class="text-red-700 dark:text-red-400">Khi quá nhiều callback lồng vào nhau, code sẽ trở nên khó đọc và khó bảo trì. Để giải quyết vấn đề này, JavaScript hiện đại cung cấp các giải pháp tốt hơn như <strong>Promises</strong> và <strong>Async/Await</strong>, chúng ta sẽ tìm hiểu ở bài tiếp theo.</p>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🔗 Kết luận
      </h2>
      <p>Hàm và Callback là hai khái niệm không thể thiếu khi làm việc với JavaScript. Nắm vững chúng sẽ giúp bạn viết code hiệu quả hơn và đặt nền móng vững chắc để tiếp cận các kỹ thuật bất đồng bộ hiện đại hơn.</p>
    </div>
  `,
      link: "https://developer.mozilla.org/vi/docs/Glossary/Callback_function",
      relatedLinks: [
        {
          title: "Callback Functions – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
        },
        {
          title: "JavaScript Functions – W3Schools",
          url: "https://www.w3schools.com/js/js_functions.asp",
        },
        {
          title: "Arrow Functions – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
        },
      ],
    },
    {
      title: "7️⃣ Promise và Async/Await – Làm chủ bất đồng bộ",
      slug: "promise-async-await",
      date: "2025-10-15",
      image: "/images/posts/7.jpg",
      tags: [
        "JavaScript",
        "Async",
        "Promise",
        "Await",
        "Frontend",
        "Concurrency",
      ],
      excerpt:
        "Nâng tầm kỹ năng JavaScript với Promise và Async/Await, giúp xử lý các tác vụ bất đồng bộ một cách gọn gàng, dễ đọc và dễ bảo trì.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Trong thế giới phát triển web hiện đại, các tác vụ bất đồng bộ là không thể tránh khỏi. JavaScript cung cấp các công cụ mạnh mẽ là
        <strong class="text-blue-600 dark:text-blue-400">Promises</strong> và
        <strong class="text-blue-600 dark:text-blue-400">Async/Await</strong>
        để quản lý các tác vụ này một cách hiệu quả, giúp mã nguồn của bạn trở nên dễ đọc và dễ bảo trì hơn so với "Callback Hell".
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu vấn đề của lập trình bất đồng bộ truyền thống (callback hell).</li>
        <li>Nắm vững khái niệm Promise, các trạng thái của nó và cách sử dụng với <code>.then()</code>, <code>.catch()</code>.</li>
        <li>Biết cách viết code bất đồng bộ một cách tuần tự hơn bằng <code>async</code> và <code>await</code>.</li>
        <li>Áp dụng Promise và Async/Await vào các tác vụ thực tế như gọi API.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ⏰ Vấn đề của "Callback Hell"
      </h2>
      <p>
        Ban đầu, callback functions là cách chính để xử lý bất đồng bộ. Nhưng khi các callback lồng nhau quá sâu, chúng tạo ra "Callback Hell", khiến code trở nên khó đọc, khó debug và khó quản lý.
      </p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Ví dụ Callback Hell (tránh tình huống này!)
loadScript('script1.js', (error, script) => {
    if (error) {
        handleError(error);
    } else {
        loadScript('script2.js', (error, script) => {
            if (error) {
                handleError(error);
            } else {
                loadScript('script3.js', (error, script) => {
                    // ... và cứ thế tiếp tục!
                });
            }
        });
    }
});
      </code></pre>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🤝 Promise: Lời hứa cho tương lai
      </h2>
      <p>
        <strong>Promise</strong> là một đối tượng đại diện cho việc hoàn thành (hoặc thất bại) của một tác vụ bất đồng bộ.
      </p>
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Trạng thái của một Promise</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Pending:</strong> Trạng thái ban đầu, tác vụ chưa hoàn thành.</li>
        <li><strong>Fulfilled (Resolved):</strong> Tác vụ hoàn thành thành công.</li>
        <li><strong>Rejected:</strong> Tác vụ thất bại.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Cách sử dụng Promise</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Dữ liệu đã tải thành công!");
        } else {
            reject("Lỗi: Không thể tải dữ liệu.");
        }
    }, 1000);
});

myPromise
    .then(result => console.log("Thành công:", result))
    .catch(error => console.error("Thất bại:", error));
      </code></pre>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Chaining Promises (Nối chuỗi)</h3>
      <p>Promise cho phép nối chuỗi các tác vụ bất đồng bộ một cách gọn gàng.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
fetchUserData()
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id); // Trả về một Promise khác
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error("Lỗi:", error);
    });
      </code></pre>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Async/Await: Cú pháp hiện đại
      </h2>
      <p>
        <strong>Async/Await</strong> là cú pháp được xây dựng trên Promise, giúp bạn viết code bất đồng bộ trông giống như code đồng bộ, làm cho nó dễ đọc và dễ hiểu hơn rất nhiều.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><code><strong>async</strong></code>: Đặt trước một hàm để khai báo rằng nó là hàm bất đồng bộ và sẽ luôn trả về một Promise.</li>
        <li><code><strong>await</strong></code>: Chỉ dùng bên trong hàm <code>async</code>, dùng để tạm dừng việc thực thi cho đến khi Promise hoàn thành.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Ví dụ với Async/Await</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
async function runGreeting() {
    try {
        console.log("Bắt đầu chào...");
        const message = await delayedGreet("Bob"); // Đợi Promise hoàn thành
        console.log(message);
        console.log("Kết thúc chương trình.");
    } catch (error) {
        console.error("Có lỗi xảy ra:", error);
    }
}

runGreeting();
      </code></pre>
      
      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        💡 Khi nào nên dùng?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Promise:</strong> Hữu ích khi bạn cần xử lý nhiều tác vụ song song (<code>Promise.all</code>) hoặc cần kiểm soát chi tiết hơn về chuỗi tác vụ.</li>
        <li><strong>Async/Await:</strong> Lý tưởng cho hầu hết các trường hợp, đặc biệt khi các bước bất đồng bộ cần thực hiện tuần tự, giúp code dễ đọc nhất.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 dark:border-indigo-400 pl-3 mt-10">
        🔗 Kết luận
      </h2>
      <p>Promise và Async/Await là những công cụ không thể thiếu cho bất kỳ lập trình viên JavaScript nào. Chúng giúp bạn quản lý sự phức tạp của các tác vụ bất đồng bộ, từ đó tạo ra code sạch hơn và hiệu quả hơn.</p>
    </div>
  `,
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
      relatedLinks: [
        {
          title: "Async JavaScript – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
        },
        {
          title: "Promises – JavaScript.info",
          url: "https://javascript.info/promise-basics",
        },
        {
          title: "Async/await – JavaScript.info",
          url: "https://javascript.info/async-await",
        },
      ],
    },

    {
      title: "8️⃣ So sánh Java và JavaScript – Cùng tên, khác thế giới",
      slug: "java-vs-javascript",
      date: "2025-10-15",
      image: "/images/posts/8.webp",
      tags: ["Java", "JavaScript", "Comparison", "Programming", "Concepts"],
      excerpt:
        "Hai ngôn ngữ quyền lực mang tên gọi tương tự nhưng có lịch sử, mục đích và triết lý hoạt động hoàn toàn khác biệt. Khám phá những điểm giống và khác nhau cốt lõi.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        <strong class="text-blue-600 dark:text-blue-400">Java</strong> và
        <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong>
        là hai ngôn ngữ lập trình cực kỳ phổ biến. Tuy nhiên, bất chấp cái tên tương đồng,
        chúng lại có lịch sử, mục đích và cách thức hoạt động hoàn toàn khác biệt.
        Bài viết này sẽ giúp bạn phân biệt rõ ràng hai "người khổng lồ" này.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì từ bài viết này?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Nắm được sự khác biệt cốt lõi về bản chất và môi trường chạy của Java và JavaScript.</li>
        <li>Hiểu rõ vai trò và ứng dụng chính của từng ngôn ngữ.</li>
        <li>Phân biệt các đặc điểm cú pháp và kiểu dữ liệu giữa hai ngôn ngữ.</li>
        <li>Có cái nhìn tổng quan để lựa chọn ngôn ngữ phù hợp cho từng dự án.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ❓ Tại sao lại có sự nhầm lẫn về tên?
      </h2>
      <p>
        Khi JavaScript ra đời vào giữa những năm 90, Java đã rất nổi tiếng. Để tận dụng sự phổ biến này,
        Netscape đã quyết định đổi tên từ LiveScript thành JavaScript. Cái tên này chủ yếu là một chiến lược marketing,
        chứ không phải vì chúng có mối liên hệ kỹ thuật sâu sắc.
      </p>
      
      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        📊 So sánh chi tiết Java và JavaScript
      </h2>
      <div class="overflow-x-auto my-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <table class="w-full text-left table-auto">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">Đặc điểm</th>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">Java</th>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">JavaScript</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Bản chất</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Ngôn ngữ biên dịch, hướng đối tượng (OOP) thuần túy.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Ngôn ngữ thông dịch, đa mô hình (OOP, hàm...).</td>
            </tr>
            <tr class="bg-gray-50 dark:bg-gray-800">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Môi trường chạy</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Chạy trên <strong>Máy ảo Java (JVM)</strong>.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Chạy trong <strong>trình duyệt web</strong> hoặc <strong>Node.js</strong>.</td>
            </tr>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Kiểu dữ liệu</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Kiểu tĩnh (Statically-typed): cần khai báo rõ kiểu.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Kiểu động (Dynamically-typed): không cần khai báo kiểu.</td>
            </tr>
            <tr class="bg-gray-50 dark:bg-gray-800">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Ứng dụng chính</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Backend, ứng dụng Android, hệ thống doanh nghiệp, Big Data.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Frontend web, Backend (Node.js), ứng dụng di động (React Native).</td>
            </tr>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Hỗ trợ đa luồng</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Hỗ trợ đa luồng (multi-threading) tích hợp sẵn.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Đơn luồng (single-threaded) với Event Loop bất đồng bộ.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Kết luận: Hai thế giới, hai sức mạnh
      </h2>
      <p>Mặc dù mang cái tên tương tự, Java và JavaScript là hai ngôn ngữ riêng biệt, mỗi ngôn ngữ có những điểm mạnh và lĩnh vực ứng dụng riêng.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>Nếu bạn muốn xây dựng hệ thống backend mạnh mẽ, ứng dụng Android, hoặc giải pháp doanh nghiệp quy mô lớn, <strong>Java</strong> là lựa chọn tuyệt vời.</li>
        <li>Nếu bạn muốn phát triển ứng dụng web tương tác, giao diện người dùng đẹp mắt, hoặc cả backend với Node.js, <strong>JavaScript</strong> là chìa khóa.</li>
      </ul>
      <p>Việc hiểu rõ cả hai ngôn ngữ này sẽ mở ra rất nhiều cơ hội trong sự nghiệp lập trình của bạn.</p>
    </div>
  `,
      link: "https://www.geeksforgeeks.org/difference-between-java-and-javascript/",
      relatedLinks: [
        {
          title: "Java vs JavaScript – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/difference-between-java-and-javascript/",
        },
        {
          title: "Java vs JavaScript – FreeCodeCamp",
          url: "https://www.freecodecamp.org/news/java-vs-javascript/",
        },
      ],
    },

    {
      title: "9️⃣ Mini Project: Kết hợp Java và JavaScript",
      slug: "project-java-javascript",
      date: "2025-10-16",
      image: "/images/posts/9.jpg",
      tags: [
        "Fullstack",
        "Java",
        "React",
        "Project",
        "API",
        "Frontend",
        "Backend",
      ],
      excerpt:
        "Thực hành xây dựng một ứng dụng full-stack đơn giản: backend với Java (Spring Boot REST API) và frontend với JavaScript (ReactJS) để hiểu cách chúng giao tiếp.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Bạn đã học về sức mạnh của <strong class="text-blue-600 dark:text-blue-400">Java</strong> ở backend và sự linh hoạt của <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong> ở frontend. Giờ là lúc kết hợp chúng lại! Project này sẽ hướng dẫn bạn xây dựng một ứng dụng full-stack hoàn chỉnh, nơi một client ReactJS giao tiếp với một API RESTful được viết bằng Spring Boot.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Mục tiêu của Project
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu rõ luồng giao tiếp Client-Server qua REST API.</li>
        <li>Thực hành tạo một API đơn giản với Spring Boot.</li>
        <li>Xây dựng một giao diện người dùng cơ bản bằng ReactJS để tương tác với API.</li>
        <li>Nắm được bức tranh tổng quan về một dự án full-stack.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🏗️ Kiến trúc ứng dụng
      </h2>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500">
          <h3 class="font-semibold text-orange-600 dark:text-orange-400">☁️ Backend (Server)</h3>
          <p class="mt-2 text-sm">Java & Spring Boot cung cấp RESTful API để quản lý dữ liệu.</p>
        </div>
        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-sky-500">
          <h3 class="font-semibold text-sky-600 dark:text-sky-400">🖥️ Frontend (Client)</h3>
          <p class="mt-2 text-sm">JavaScript & ReactJS tạo giao diện, gửi yêu cầu và hiển thị dữ liệu.</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        ⚙️ Bước 1: Xây dựng API Backend với Spring Boot
      </h2>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">1. Tạo Model (Task.java)</h3>
      <p>Đầu tiên, chúng ta định nghĩa đối tượng <code>Task</code> sẽ trông như thế nào.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
// Task.java
public class Task {
    private Long id;
    private String description;
    private boolean completed;

    // Constructors, Getters, Setters
    public Task() {}
    public Task(Long id, String description, boolean completed) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}
      </code></pre>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">2. Tạo Controller (TaskController.java)</h3>
      <p>Tiếp theo, tạo các endpoint để Frontend có thể gọi đến.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
// TaskController.java
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    private final List<Task> tasks = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public TaskController() {
        tasks.add(new Task(counter.incrementAndGet(), "Học Java", false));
        tasks.add(new Task(counter.incrementAndGet(), "Học JavaScript", false));
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return tasks;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        task.setId(counter.incrementAndGet());
        tasks.add(task);
        return task;
    }
}
      </code></pre>

      <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
        <h4 class="font-semibold text-yellow-800 dark:text-yellow-300">💡 Chú thích quan trọng: CORS</h4>
        <p class="text-yellow-700 dark:text-yellow-400">Annotation <code>@CrossOrigin(origins = "http://localhost:3000")</code> cực kỳ cần thiết. Nó giống như một "giấy thông hành" cho phép ứng dụng React (chạy ở cổng 3000) được phép gọi đến API của bạn (chạy ở cổng 8080). Nếu thiếu nó, trình duyệt sẽ chặn yêu cầu vì lý do bảo mật.</p>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ⚛️ Bước 2: Hiển thị Code Frontend (ReactJS)
      </h2>
      <p>Đây là code ví dụ cho component React để hiển thị trên trang blog.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-jsx">
// App.js (hoặc một component TaskList.js)
import React, &#123; useEffect, useState &#125; from 'react';

function App() &#123;
  const [tasks, setTasks] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const API_BASE_URL = 'http://localhost:8080/api/tasks';

  useEffect(() => &#123;
    fetchTasks();
  &#125;, []);

  const fetchTasks = async () => &#123;
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    setTasks(data);
  &#125;;

  const handleAddTask = async (e) => &#123;
    e.preventDefault();
    if (!newTaskDescription.trim()) return;

    const newTask = &#123; description: newTaskDescription, completed: false &#125;;
    const response = await fetch(API_BASE_URL, &#123;
      method: 'POST',
      headers: &#123; 'Content-Type': 'application/json' &#125;,
      body: JSON.stringify(newTask),
    &#125;);
    const addedTask = await response.json();
    setTasks([...tasks, addedTask]);
    setNewTaskDescription('');
  &#125;;

  return (
    &lt;div style=&#123;&#123; maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' &#125;&#125;&gt;
      &lt;h1 style=&#123;&#123; textAlign: 'center', marginBottom: '20px' &#125;&#125;&gt;Task Manager&lt;/h1&gt;
      &lt;form onSubmit=&#123;handleAddTask&#125; style=&#123;&#123; display: 'flex', marginBottom: '20px' &#125;&#125;&gt;
        &lt;input
          type="text"
          value=&#123;newTaskDescription&#125;
          onChange=&#123;(e) => setNewTaskDescription(e.target.value)&#125;
          placeholder="Thêm task mới..."
          style=&#123;&#123; flexGrow: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' &#125;&#125;
        /&gt;
        &lt;button type="submit" style=&#123;&#123; padding: '10px 15px', marginLeft: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' &#125;&#125;&gt;
          Thêm
        &lt;/button&gt;
      &lt;/form&gt;
      &lt;ul style=&#123;&#123; listStyle: 'none', padding: 0 &#125;&#125;&gt;
        &#123;tasks.map(task => (
          &lt;li key=&#123;task.id&#125; style=&#123;&#123; padding: '10px 0', borderBottom: '1px solid #eee' &#125;&#125;&gt;
            &#123;task.description&#125; - &#123;task.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'&#125;
          &lt;/li&gt;
        ))&#125;
      &lt;/ul&gt;
    &lt;/div&gt;
  );
&#125;
export default App;
      </code></pre>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🖼️ Kết quả cuối cùng (Minh họa)
      </h2>
      <p>Bên dưới là hình ảnh minh họa cho kết quả của đoạn code trên khi được chạy trong một dự án React thực tế.</p>
      <div class="mt-4 p-4 border rounded-lg bg-white dark:bg-gray-800">
        <img 
          src="/images/posts/9-result.jpg" 
          alt="Kết quả ứng dụng Task Manager" 
          class="rounded-md shadow-lg w-full"
        >
      </div>
      
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 dark:border-indigo-400 pl-3 mt-10">
        🔗 Tóm lược và Các bước tiếp theo
      </h2>
      <p>Project này là một ví dụ tuyệt vời về cách Java và JavaScript phối hợp với nhau. Để nâng cao hơn, bạn có thể thêm chức năng <strong>Cập nhật</strong> (PUT), <strong>Xóa</strong> (DELETE), kết nối cơ sở dữ liệu và cải thiện giao diện người dùng.</p>
    </div>
  `,
      link: "https://spring.io/guides/gs/rest-service/",
      relatedLinks: [
        {
          title: "Spring Boot REST Service – Spring.io",
          url: "https://spring.io/guides/gs/rest-service/",
        },
        {
          title: "React Hooks – Official Docs",
          url: "https://react.dev/reference/react",
        },
        {
          title: "Fetch API – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
        },
      ],
    },

    {
      title: "🔟 JavaScript OOP: Prototype và Class",
      slug: "javascript-essentials-2-oop",
      date: "2025-10-16",
      image: "/images/posts/10.jpg",
      tags: ["JavaScript", "OOP", "Prototype", "JSE2", "ES6"],
      excerpt:
        "Đi sâu vào bản chất OOP của JavaScript: từ cơ chế prototype độc đáo đến cú pháp `class` hiện đại của ES6, giúp bạn xây dựng code có cấu trúc và tái sử dụng.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Khác với các ngôn ngữ hướng đối tượng truyền thống như Java, <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong> có một cách tiếp cận OOP độc đáo thông qua cơ chế <strong class="text-blue-600 dark:text-blue-400">prototype</strong>. Bài viết này sẽ giúp bạn hiểu sâu về nền tảng này và cách cú pháp <code>class</code> hiện đại của ES6 chỉ là một lớp "bọc đường" tiện lợi hơn.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu sự khác biệt cốt lõi giữa OOP dựa trên lớp và OOP dựa trên prototype.</li>
        <li>Nắm vững khái niệm chuỗi prototype (prototype chain) và cách nó hoạt động.</li>
        <li>Thực hành tạo đối tượng theo cả hai cách: dùng Hàm tạo (truyền thống) và dùng <code>class</code> (hiện đại).</li>
        <li>Nhận ra tại sao hiểu về prototype lại quan trọng ngay cả khi bạn chỉ dùng <code>class</code>.</li>
      </ul>

      <div class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 class="font-semibold text-gray-900 dark:text-gray-100">OOP trong JavaScript: Khác biệt cốt lõi</h3>
        <p class="mt-2 text-sm">
          Thay vì dùng "bản thiết kế" (class) để tạo đối tượng, mọi đối tượng trong JavaScript đều có một liên kết ẩn đến một đối tượng khác, gọi là <strong>prototype</strong>. Khi một thuộc tính không được tìm thấy, JavaScript sẽ tự động tìm kiếm trên chuỗi prototype. Đây chính là cách JavaScript thực hiện kế thừa.
        </p>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🏛️ Cách 1: Dùng Hàm tạo & Prototype (Truyền thống)
      </h2>
      <p>Trước khi ES6 ra đời, đây là cách chính để tạo các đối tượng có cấu trúc tương tự nhau.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// 1. Định nghĩa một hàm tạo (Constructor Function)
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 2. Thêm các phương thức vào prototype để dùng chung
Car.prototype.getSummary = function() {
    return \`Xe \${this.brand} \${this.model}, sản xuất năm \${this.year}.\`;
};

// 3. Tạo các đối tượng (instances)
const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.getSummary()); // "Xe Toyota Camry, sản xuất năm 2020."
      </code></pre>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ✨ Cách 2: Dùng cú pháp <code>class</code> (Hiện đại)
      </h2>
      <p>ES6 giới thiệu từ khóa <code>class</code> để cú pháp OOP trở nên quen thuộc và dễ đọc hơn. Tuy nhiên, nó vẫn hoạt động dựa trên prototype ngầm bên dưới.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
class Animal {
    // constructor là phương thức đặc biệt để tạo và khởi tạo đối tượng
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} tạo ra một âm thanh.\`);
    }
}

// Dùng "extends" để kế thừa
class Dog extends Animal {
    speak() { // Ghi đè phương thức của lớp cha (Overriding)
        console.log(\`\${this.name} sủa: Gâu gâu!\`);
    }
}

const myDog = new Dog('Buddy');
myDog.speak(); // "Buddy sủa: Gâu gâu!"
      </code></pre>
      
      <div class="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r-lg">
        <h4 class="font-semibold text-indigo-800 dark:text-indigo-300">💡 Điểm mấu chốt</h4>
        <p class="text-indigo-700 dark:text-indigo-400">Cú pháp <code>class</code> chỉ là "syntactic sugar" - một cách viết khác gọn gàng hơn cho cơ chế prototype. Hiểu về prototype giúp bạn gỡ lỗi hiệu quả và nắm vững bản chất của JavaScript.</p>
      </div>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🚀 Kết luận
      </h2>
      <p>Nắm vững OOP trong JavaScript, dù theo cách nào, cũng sẽ giúp bạn xây dựng các ứng dụng phức tạp với cấu trúc rõ ràng, dễ dàng tái sử dụng và mở rộng.</p>
    </div>
  `,
      link: "https://www.netacad.com/courses/programming/javascript-essentials-2",
      relatedLinks: [
        {
          title: "Inheritance and the prototype chain - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
        },
        {
          title: "JavaScript Classes - W3Schools",
          url: "https://www.w3schools.com/js/js_classes.asp",
        },
        {
          title: "Classes - JavaScript.info",
          url: "https://javascript.info/class",
        },
      ],
    },

    // Chỉ cần cập nhật content cho bài viết số 11
    {
      title: "🌐 Networking Basics – Quy trình gửi dữ liệu qua mạng",
      slug: "networking-basics-osi-tcp-ip",
      date: "2025-10-16",
      image: "/images/posts/11.png",
      tags: ["Networking", "OSI", "TCP/IP", "Basics", "Infrastructure"],
      excerpt:
        "Khám phá hai mô hình mạng máy tính nền tảng nhất: OSI 7 lớp và TCP/IP. Đây là kiến thức cốt lõi cho mọi lập trình viên để hiểu cách dữ liệu di chuyển trên Internet.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Bạn đã bao giờ tự hỏi điều gì thực sự xảy ra khi bạn gõ một địa chỉ web và nhấn Enter chưa? Dữ liệu không chỉ "bay" một cách thần kỳ qua Internet. Nó tuân theo một quy trình đóng gói và vận chuyển nghiêm ngặt, giống như cách bạn gửi một bưu kiện vậy.
      </p>
      <p>
        Hãy tưởng tượng: bạn viết một lá thư (dữ liệu), cho vào phong bì (đóng gói), ghi địa chỉ (thêm thông tin), và gửi cho bưu điện (truyền đi). Mạng máy tính cũng hoạt động tương tự qua một quy trình gọi là <strong>đóng gói (encapsulation)</strong>. Hai mô hình nổi tiếng nhất để mô tả quy trình này là OSI và TCP/IP.
      </p>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🏛️ Mô hình OSI: "Bản Thiết Kế" Chi Tiết 7 Lớp
      </h2>
      <p>Mô hình OSI là một bản thiết kế lý thuyết, chia quá trình giao tiếp mạng thành 7 bước (lớp) cụ thể. Nó giúp chúng ta hiểu rõ vai trò của từng thành phần.</p>
      <img src="/images/posts/1111.1.jpg" alt="Quy trình đóng gói dữ liệu qua mô hình OSI" class="my-4 w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-6 mb-2">Quy trình Gửi dữ liệu (Encapsulation)</h3>
      <div class="space-y-3">
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 7 (Application):</strong> Nơi bạn tạo ra dữ liệu. <strong>Ví dụ:</strong> Soạn email, gõ URL trình duyệt.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 6 (Presentation):</strong> Dữ liệu được định dạng, mã hóa (SSL/TLS). <strong>Ví dụ:</strong> Chuyển văn bản thành mã ASCII.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 5 (Session):</strong> Mở và duy trì một "phiên" kết nối ổn định.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 4 (Transport):</strong> Dữ liệu được cắt thành các <strong>Segments</strong>. Giao thức TCP thêm số thứ tự để đảm bảo tin cậy.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 3 (Network):</strong> Segments được thêm địa chỉ IP, trở thành các <strong>Packets</strong>. Router dùng thông tin này để tìm đường đi.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 2 (Data Link):</strong> Packets được thêm địa chỉ MAC, trở thành các <strong>Frames</strong> để di chuyển trong mạng cục bộ.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Lớp 1 (Physical):</strong> Frames được chuyển thành tín hiệu điện/sóng (<strong>Bits</strong>) và truyền đi qua cáp hoặc Wi-Fi.</div>
      </div>
      <p class="mt-4">Khi máy chủ nhận được, nó sẽ làm quy trình ngược lại (lột vỏ từ lớp 1 → 7) để lấy lại dữ liệu gốc.</p>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🌐 Mô hình TCP/IP: "Mô Hình Thực Tế" 4 Lớp
      </h2>
      <p>TCP/IP là mô hình được ứng dụng thực tế và là nền tảng của Internet. Nó gom 7 lớp của OSI lại thành 4 lớp đơn giản hơn.</p>
      <img src="/images/posts/11.2.jpg" alt="Mô hình TCP/IP 4 lớp" class="my-4 w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div class="space-y-3">
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Application (Lớp 7, 6, 5 OSI):</strong> Xử lý các giao thức người dùng như HTTPS, TLS, DNS.</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Transport (Lớp 4 OSI):</strong> Vận chuyển dữ liệu đầu cuối bằng TCP hoặc UDP.</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Internet (Lớp 3 OSI):</strong> Định tuyến các gói tin bằng địa chỉ IP (IPv4, IPv6).</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Network Access (Lớp 2, 1 OSI):</strong> Truyền dữ liệu trên phần cứng vật lý như Ethernet, Wi-Fi.</div>
      </div>
      
      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Ví dụ thực tế: Truy cập một trang web
      </h2>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>Bạn (Application):</strong> Gõ <code>google.com</code>. Trình duyệt tạo yêu cầu HTTP "GET /".</li>
        <li><strong>Đóng gói (Transport):</strong> Yêu cầu được cắt nhỏ, cho vào các TCP Segment, gắn cổng đích là 443 (HTTPS).</li>
        <li><strong>Gắn địa chỉ (Internet):</strong> Mỗi Segment được cho vào một IP Packet, gắn IP đích là của máy chủ Google.</li>
        <li><strong>Gửi cục bộ (Network Access):</strong> Packet được cho vào một Frame, gắn địa chỉ MAC của router nhà bạn.</li>
        <li><strong>Truyền đi (Physical):</strong> Frame được chuyển thành tín hiệu điện và gửi đến router.</li>
        <li><strong>Hành trình:</strong> Router của bạn đọc địa chỉ IP và đẩy Packet ra Internet, nó nhảy qua nhiều router khác để đến máy chủ Google.</li>
        <li><strong>Phản hồi:</strong> Máy chủ Google làm quy trình ngược lại để đọc yêu cầu, sau đó đóng gói nội dung trang web và gửi trả lại cho bạn theo cùng quy trình.</li>
      </ol>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        💡 Tại sao Lập trình viên cần biết?
      </h2>
       <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Debug hiệu quả hơn:</strong> Khi API không hoạt động, bạn có thể phán đoán lỗi nằm ở đâu (Lỗi DNS? Lỗi kết nối TCP? Hay lỗi ở tầng ứng dụng?).</li>
          <li><strong>Thiết kế hệ thống tốt hơn:</strong> Hiểu cách dữ liệu truyền đi giúp tối ưu hiệu năng và bảo mật.</li>
          <li><strong>Giao tiếp tốt hơn:</strong> Dễ dàng trao đổi với các kỹ sư mạng hoặc DevOps.</li>
        </ul>
    </div>
  `,
      link: "https://www.netacad.com/courses/networking/networking-basics",
      relatedLinks: [
        {
          title: "What is OSI Model? - Layers of OSI Model",
          url: "https://www.geeksforgeeks.org/computer-networks/open-systems-interconnection-model-osi/",
        },
        {
          title: "TCP/IP Model - GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/tcp-ip-model/",
        },
      ],
    },
    {
      title: "1️⃣2️⃣ JavaScript: Xử lý lỗi chuyên nghiệp với try...catch",
      slug: "javascript-error-handling",
      date: "2025-10-16",
      image: "/images/posts/12.jpg",
      tags: ["JavaScript", "Error Handling", "JSE2", "Exception", "try-catch"],
      excerpt:
        "Làm thế nào để chương trình không bị 'sập' khi gặp lỗi? Học cách sử dụng `try...catch...finally` để bắt và xử lý ngoại lệ một cách chuyên nghiệp, giúp ứng dụng của bạn mạnh mẽ và thân thiện hơn.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Lỗi (error) là một phần không thể tránh khỏi trong lập trình. Thay vì để một lỗi không mong muốn làm "sập" toàn bộ ứng dụng, JavaScript cung cấp một cơ chế mạnh mẽ để quản lý chúng: khối lệnh <strong class="text-blue-600 dark:text-blue-400">try...catch...finally</strong>. Bài viết này sẽ giúp bạn viết code an toàn và đáng tin cậy hơn.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Bạn sẽ học được gì?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Hiểu tại sao việc xử lý lỗi lại quan trọng.</li>
        <li>Nắm vững cú pháp và cách hoạt động của khối lệnh <code>try...catch...finally</code>.</li>
        <li>Biết cách sử dụng đối tượng <code>Error</code> để lấy thông tin chi tiết về lỗi.</li>
        <li>Học cách chủ động "ném" lỗi bằng từ khóa <code>throw</code> để kiểm soát luồng chương trình.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🚧 Tại sao phải xử lý lỗi?
      </h2>
      <p>Nếu một lỗi xảy ra và không được xử lý, chương trình sẽ dừng đột ngột, tạo ra trải nghiệm tồi tệ cho người dùng. Xử lý lỗi giúp bạn:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Ngăn chặn "crash":</strong> Giữ cho ứng dụng tiếp tục chạy.</li>
        <li><strong>Phản hồi thân thiện:</strong> Hiển thị thông báo lỗi rõ ràng cho người dùng.</li>
        <li><strong>Gỡ lỗi dễ dàng:</strong> Ghi lại thông tin chi tiết về lỗi để sửa chữa.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🔧 Cú pháp 'try...catch...finally'
      </h2>
      <p>Cơ chế này bao gồm ba khối:</p>
      <div class="mt-4 space-y-3">
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>try</strong></code>: Chứa đoạn code mà bạn dự đoán có thể gây ra lỗi.</div>
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>catch (error)</strong></code>: Nếu có lỗi trong khối <code>try</code>, chương trình sẽ nhảy vào đây. Biến <code>error</code> chứa thông tin về lỗi đó.</div>
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>finally</strong></code> (tùy chọn): Khối này <strong>luôn luôn</strong> được thực thi, bất kể có lỗi hay không. Thường dùng để dọn dẹp tài nguyên.</div>
      </div>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto mt-4"><code class="language-javascript">
try {
  console.log("Bắt đầu khối try...");
  // Giả lập một lỗi
  someUndefinedFunction(); 
  console.log("Dòng này sẽ không được chạy."); 
} catch (error) {
  // Nếu có lỗi, luồng thực thi sẽ nhảy vào đây
  console.error("Đã có lỗi xảy ra!");
  console.error("Thông điệp lỗi:", error.message); // Ví dụ: "someUndefinedFunction is not defined"
} finally {
  // Khối này luôn được thực thi
  console.log("Khối finally đã được thực thi.");
}
console.log("Chương trình vẫn tiếp tục chạy.");
      </code></pre>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Ném lỗi chủ động với 'throw'
      </h2>
      <p>Đôi khi, bạn muốn tự tạo ra lỗi của riêng mình khi một điều kiện không mong muốn xảy ra (ví dụ: dữ liệu đầu vào không hợp lệ). Bạn có thể làm điều này bằng từ khóa <code>throw</code>.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto mt-4"><code class="language-javascript">
function parseUser(jsonString) {
  try {
    let user = JSON.parse(jsonString);

    if (!user.name || !user.age) {
      // Chủ động ném một lỗi nếu dữ liệu không hợp lệ
      throw new Error("Dữ liệu người dùng không đầy đủ: thiếu tên hoặc tuổi.");
    }
    
    console.log(\`Người dùng: \${user.name}, Tuổi: \${user.age}\`);
    return user;

  } catch (error) {
    console.error("Lỗi xử lý dữ liệu:", error.message);
    return null; // Trả về null hoặc thực hiện hành động khác
  }
}

parseUser('{"name": "Alice"}'); // Output: Lỗi xử lý dữ liệu: Dữ liệu người dùng không đầy đủ...
      </code></pre>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🔗 Kết luận
      </h2>
      <p>Xử lý lỗi là một kỹ năng thiết yếu của một lập trình viên chuyên nghiệp. Việc sử dụng thành thạo <code>try...catch</code> và <code>throw</code> không chỉ giúp ứng dụng của bạn ổn định hơn mà còn cải thiện đáng kể trải nghiệm của người dùng.</p>
    </div>
  `,
      link: "https://www.netacad.com/courses/programming/javascript-essentials-2",
      relatedLinks: [
        {
          title: "try...catch - MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
        },
        {
          title: "JavaScript Errors - W3Schools",
          url: "https://www.w3schools.com/js/js_errors.asp",
        },
        {
          title: "Error handling, 'try...catch' - JavaScript.info",
          url: "https://javascript.info/try-catch",
        },
      ],
    },
  ],
  en: [
    {
      title: "1️⃣ Introduction to the Java Programming Language – A First Step for Beginners",
      slug: "gioi-thieu-java-co-ban", // Slug giữ nguyên để trỏ đến cùng một trang
      date: "2025-10-15",
      image: "/images/posts/1.jpg",
      tags: ["Java", "OOP", "Beginner", "Programming"],
      excerpt: "A journey to discover Java – from a 'Write Once, Run Anywhere' language to the foundation of Android and large enterprise systems.",
      content: `
      <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <p class="text-lg font-medium">
          Welcome to the world of 
          <strong class="text-blue-600 dark:text-blue-400">Java</strong> – 
          one of the most powerful and popular programming languages on the planet! 
          Developed by <strong>Sun Microsystems</strong> in 1995, Java quickly became the backbone of many technology systems,
          from mobile applications to large-scale enterprise solutions.
        </p>

        <p>
          This article will be your first guide, helping you understand Java, the benefits of learning it, and why 
          Java still holds a crucial position in the modern software industry.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-8 border-l-4 border-blue-500 dark:border-blue-400 pl-3">
          📘 What will you learn from this article?
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Understand the origin and the "Write Once, Run Anywhere" philosophy of Java.</li>
          <li>Grasp the key features that make Java a top choice for many types of projects.</li>
          <li>Discover the practical application areas of Java in daily life and industry.</li>
          <li>Learn compelling reasons to start your Java learning journey today.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 mt-10 border-l-4 border-purple-500 dark:border-purple-400 pl-3">
          💡 Why is Java still a sustainable choice?
        </h2>
        <p>
          Java is not just a language; it's a powerful ecosystem. Here are the main reasons you should consider learning Java:
        </p>

        <ul class="list-disc ml-6 space-y-3">
          <li>
            <strong>Platform Independent:</strong> 
            Thanks to the <span class="font-semibold text-blue-500 dark:text-blue-300">Java Virtual Machine (JVM)</span>, 
            the Java code you write can run on almost any device with a JVM — from desktops and servers to embedded devices. 
            This is the realization of the slogan <em>"Write Once, Run Anywhere"</em>.
          </li>
          <li>
            <strong>Wide Range of Applications:</strong>
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Android Development:</strong> Java is the official language for building Android apps.</li>
              <li><strong>Enterprise Systems:</strong> Large corporations like banks, financial institutions, and insurance companies use Java (Spring Boot) to build robust systems.</li>
              <li><strong>Big Data & AI:</strong> Many tools in Big Data (like Hadoop, Spark) are written in Java.</li>
              <li><strong>IoT:</strong> Java is also present in smart devices, from TVs to automation systems.</li>
            </ul>
          </li>
          <li><strong>Strong OOP Support:</strong> Helps make code clear, easy to maintain, and scalable.</li>
          <li><strong>Large Community:</strong> Millions of Java developers worldwide, abundant documentation, courses, and quick support.</li>
          <li><strong>Rich Tools:</strong> IDEs (IntelliJ, Eclipse), libraries, and frameworks (Spring, Hibernate, Maven).</li>
        </ul>

        <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 mt-10 border-l-4 border-green-500 dark:border-green-400 pl-3">
          ⚙️ Key Technical Features of Java
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Automatic Memory Management (Garbage Collection):</strong> Helps prevent memory leaks and reduces errors.</li>
          <li><strong>Exception Handling:</strong> Write safe code and manage errors professionally.</li>
          <li><strong>High Security:</strong> Built-in security features, safe for enterprise environments.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-10 border-l-4 border-orange-500 dark:border-orange-400 pl-3">
          🚀 Start Your Java Journey
        </h2>
        <p>
          If you are looking for a language with high applicability, stability, and one that opens up many career opportunities in 
          backend development, Android, or enterprise systems — 
          <strong class="text-blue-600 dark:text-blue-400">Java</strong> is the perfect choice.
        </p>
        <p>
          Let's explore Java more deeply in the upcoming articles!
        </p>
      </div>
    `,
      link: "https://www.netacad.com/vi/courses/java-programming",
      relatedLinks: [
        {
          title: "Java Basics Course – NetAcad",
          url: "https://www.netacad.com/vi/courses/java-programming",
        },
        {
          title: "Object-Oriented Programming with Java – W3Schools",
          url: "https://www.w3schools.com/java/java_oop.asp",
        },
        {
          title: "Spring Boot Tutorial – Baeldung",
          url: "https://www.baeldung.com/spring-boot",
        },
      ],
    },
    {
      title: "2️⃣ Java Program Structure & Basic Syntax",
      slug: "cau-truc-chuong-trinh-java", // Slug giữ nguyên
      date: "2025-10-15",
      image: "/images/posts/2.jpg",
      tags: ["Java", "Syntax", "Beginner", "Structure"],
      excerpt: "Master the first building blocks of Java: from how a program is organized to the most fundamental coding syntax.",
      content: `
      <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <p class="text-lg font-medium">
          To start writing <strong class="text-blue-600 dark:text-blue-400">Java</strong> code, it's crucial to understand the basic structure of a Java program and the syntax rules you need to follow. 
          This article will help you build your first <em>"Hello World"</em> program and explain every single component.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
          📘 What will you learn from this article?
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Understand the core structure of a Java program, including classes and methods.</li>
          <li>Grasp the role of the <code>main()</code> method – the starting point of every Java application.</li>
          <li>Know how to use <code>System.out.println()</code> to display information on the screen.</li>
          <li>Learn basic syntax rules like semicolons, file names, and naming conventions.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
          🧠 Structure of a Simple Java Program
        </h2>
        <p>
          Every Java program is built upon <em>classes</em>. 
          A minimal Java application will include a class and a special method called <code>main()</code> — where the program begins execution.
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">📄 Example: The classic "Hello World" Program</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
public class HelloWorld { // Declare a class named HelloWorld
    public static void main(String[] args) { // The program's starting point
        System.out.println("Hello, Java!"); // Print a message to the console
    } // End of the main method
} // End of the HelloWorld class
        </code></pre>

        <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
          📌 Detailed Explanation of Components
        </h2>
        <ul class="list-disc ml-6 space-y-4">
          <li>
            <code class="font-semibold text-blue-500 dark:text-blue-300">public class HelloWorld</code>:
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li><code>public</code>: Allows the class to be accessed from anywhere.</li>
              <li><code>class</code>: The keyword used to define a class.</li>
              <li><code>HelloWorld</code>: The name of the class. In Java, the file name must match the name of the class containing the <code>main</code> method (e.g., <code>HelloWorld.java</code>).</li>
            </ul>
          </li>
          <li>
            <code class="font-semibold text-blue-500 dark:text-blue-300">public static void main(String[] args)</code>: 
            This is the main method, where the <strong>Java Virtual Machine (JVM)</strong> starts executing the code.
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li><code>public</code>: Allows the JVM to call this method.</li>
              <li><code>static</code>: Allows the method to be called without creating an object.</li>
              <li><code>void</code>: The method does not return any value.</li>
              <li><code>main</code>: The required name for the starting method.</li>
              <li><code>(String[] args)</code>: An array of strings used to receive command-line arguments.</li>
            </ul>
          </li>
          <li>
            <code class="font-semibold text-blue-500 dark:text-blue-300">System.out.println("Hello, Java!");</code>:
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li><code>System</code>: A built-in class in Java that provides system utilities.</li>
              <li><code>out</code>: A static field representing the standard output stream (the console).</li>
              <li><code>println()</code>: A method that prints a string or value to the console, followed by a new line.</li>
            </ul>
          </li>
        </ul>

        <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
          📝 Syntax Rules & Important Notes
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Every Java statement ends with a semicolon (<code>;</code>).</li>
          <li>Code blocks are enclosed in curly braces (<code>{ }</code>).</li>
          <li>Java is case-sensitive.</li>
          <li>Use comments (<code>//</code> or <code>/* ... */</code>) to explain your code.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-pink-600 dark:text-pink-400 border-l-4 border-pink-500 dark:border-pink-400 pl-3 mt-10">
          🚀 What's Next?
        </h2>
        <p>
          With a solid foundation in basic structure and syntax, you are ready to dive deeper into important concepts like 
          <strong class="text-blue-600 dark:text-blue-400">variables</strong>, 
          <strong class="text-blue-600 dark:text-blue-400">data types</strong>, 
          <strong class="text-blue-600 dark:text-blue-400">operators</strong>, and especially 
          <strong class="text-blue-600 dark:text-blue-400">Object-Oriented Programming (OOP)</strong> – the heart of Java.
        </p>
        <p>Keep exploring to build your first powerful Java applications!</p>
      </div>
    `,
      link: "https://www.w3schools.com/java/java_syntax.asp",
      relatedLinks: [
        {
          title: "Java Syntax – W3Schools",
          url: "https://www.w3schools.com/java/java_syntax.asp",
        },
        {
          title: "Java Basics – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/java-programming-basics/",
        },
      ],
    },
    {
      title: "3️⃣ Object-Oriented Programming in Java (OOP)",
      slug: "lap-trinh-huong-doi-tuong-java", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/3.jpg",
      tags: ["Java", "OOP", "Class", "Object"],
      excerpt: "Explore the 4 fundamental pillars of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction) and how Java implements them through concrete examples.",
      content: `
      <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <p class="text-lg font-medium">
          Object-Oriented Programming 
          <strong class="text-blue-600 dark:text-blue-400">(OOP)</strong>
          is one of the most important concepts and is the core of Java. 
          It helps us organize code in a logical, understandable, scalable, and maintainable way. 
          This article will walk you through the 4 main pillars of OOP and how Java applies them.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
          📘 What will you learn from this article?
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Gain a deep understanding of the 4 basic principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.</li>
          <li>Understand how Java implements each principle through illustrative code examples.</li>
          <li>Learn the benefits of applying OOP in building complex applications.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
          🏛️ The 4 Pillars of OOP in Java
        </h2>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
          1. Encapsulation
        </h3>
        <p>Encapsulation is the mechanism of hiding data (attributes) and the methods that process that data within a single class, exposing only the necessary methods for external interaction. It helps protect data from unwanted access and makes the code more modular and manageable.</p>

        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        if (newName != null && !newName.trim().isEmpty()) {
            this.name = newName;
        } else {
            System.out.println("Invalid name!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setName("Alice");
        System.out.println(s1.getName()); // Outputs: Alice
        s1.setName(""); // Outputs: Invalid name!
    }
}
        </code></pre>
        <p><strong>Benefits:</strong> Data protection, access control, increased flexibility, and easier maintenance.</p>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
          2. Inheritance
        </h3>
        <p>Inheritance allows a class (subclass) to inherit attributes and methods from another class (superclass). This promotes code reusability and creates an "is-a" relationship.</p>

        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
// Superclass
class Animal {
    void eat() {
        System.out.println("The animal is eating.");
    }
    void sleep() {
        System.out.println("The animal is sleeping.");
    }
}

// Subclass inherits from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("Woof woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();    // Inherited method
        myDog.bark();   // Own method
    }
}
        </code></pre>
        <p><strong>Benefits:</strong> Code reusability, reduced duplication, and creation of a clear hierarchical structure.</p>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
          3. Polymorphism
        </h3>
        <p>Polymorphism allows objects of different classes to respond differently to the same method. In Java, it's implemented through method overriding and interfaces.</p>

        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow meow!");
    }
}

class Duck extends Animal {
    @Override
    void makeSound() {
        System.out.println("Quack quack!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myCat = new Cat();
        Animal myDuck = new Duck();

        myCat.makeSound(); // Outputs: Meow meow!
        myDuck.makeSound(); // Outputs: Quack quack!
    }
}
        </code></pre>
        <p><strong>Benefits:</strong> Flexibility, extensibility, and the ability to process different objects in the same way.</p>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">
          4. Abstraction
        </h3>
        <p>Abstraction is the process of hiding complex implementation details and showing only the necessary information. In Java, this is achieved using abstract classes and interfaces.</p>

        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
abstract class Shape {
    String color;
    Shape(String color) { this.color = color; }
    abstract double area(); // Abstract method
    public String getColor() { return color; }
}

class Circle extends Shape {
    double radius;
    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape myCircle = new Circle("Red", 5.0);
        System.out.println("Color: " + myCircle.getColor());
        System.out.println("Area: " + myCircle.area());
    }
}
        </code></pre>
        <p><strong>Benefits:</strong> Simplifies the system, focuses on "what" rather than "how".</p>

        <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
          🚀 The Importance of OOP
        </h2>
        <p>A solid understanding of OOP helps you write code that is easy to read, extend, and maintain. It is the foundation for building large-scale, sustainable, and efficient Java applications. Practice extensively to make OOP your second nature!</p>
      </div>
    `,
      link: "https://www.netacad.com/vi/courses/java-programming",
      relatedLinks: [
        {
          title: "Java OOP Concepts – W3Schools",
          url: "https://www.w3schools.com/java/java_oop.asp",
        },
        {
          title: "Inheritance in Java – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/inheritance-in-java/",
        },
      ],
    },

    {
      title: "4️⃣ JavaScript Essentials 1 – Getting to Know the Language of the Web",
      slug: "javascript-essentials-1", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/4.png",
      tags: ["JavaScript", "Frontend", "DOM", "WebDev", "Beginner"],
      excerpt: "Step into the world of JavaScript – the essential language for creating dynamic, interactive, and lively websites.",
      content: `
      <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
        <p class="text-lg font-medium">
          Welcome to <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong>
          – the heart of every modern website! If HTML provides the structure and CSS adds the style,
          then JavaScript brings life, allowing your website to interact with users and perform complex tasks.
          This article will introduce you to the most basic concepts of JavaScript and why it is so important.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
          📘 What will you learn from this article?
        </h2>
        <ul class="list-disc ml-6 space-y-2">
          <li>Understand the role of JavaScript in modern web development.</li>
          <li>Know how to embed JavaScript into your HTML page.</li>
          <li>Get acquainted with the basic syntax of JavaScript.</li>
          <li>Learn how to interact with HTML elements (DOM Manipulation) and handle events (Event Handling).</li>
          <li>Build your first "Hello World" example with JavaScript.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
          🪄 What is JavaScript and Why is it Important?
        </h2>
        <p>
          JavaScript is a scripting language that runs directly in the user's browser.
          It doesn't need to be compiled like Java; the browser interprets and executes it immediately.
        </p>
        <p><strong>Importance:</strong></p>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Creating Interaction:</strong> JavaScript allows you to create buttons, menus, data validation forms, image carousels, etc.</li>
          <li><strong>Controlling the DOM:</strong> You can access and change the content, structure, and style of HTML through the <strong>Document Object Model (DOM)</strong>.</li>
          <li><strong>Full-stack:</strong> With Node.js, JavaScript is used not only on the frontend but also on the backend.</li>
          <li><strong>Libraries & Frameworks:</strong> React, Vue, Angular... help you build powerful UIs.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
          📚 First Example: Interacting with HTML via DOM and Events
        </h2>
        <p>
          This example illustrates how JavaScript makes a webpage "alive".
          When the button is clicked, an alert will appear.
        </p>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">HTML Code (index.html)</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;JavaScript First Step&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to JavaScript!&lt;/h1&gt;
    &lt;button id="myButton"&gt;Click me!&lt;/button&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>

        <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">JavaScript Code (script.js)</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Select the button element by its ID
const myButton = document.querySelector("#myButton");

// Attach a 'click' event listener to the button
myButton.addEventListener("click", () => {
  alert("Hello, JavaScript! You just clicked the button.");
  // alert() displays a dialog box
});

console.log("JavaScript has loaded successfully!");
        </code></pre>

        <p><strong>Explanation:</strong></p>
        <ul class="list-disc ml-6 space-y-2">
          <li><code>document.querySelector("#myButton")</code>: Accesses the HTML element with <code>id="myButton"</code>.</li>
          <li><code>addEventListener("click", ...)</code>: Attaches an "event listener" to the button.</li>
          <li><code>alert()</code>: Displays a notification dialog in the browser.</li>
        </ul>
        <p>
          With just a few lines of code, you have made a static HTML page interactive.
          That is the power of <strong>DOM Manipulation</strong> and <strong>Event Handling</strong>.
        </p>

        <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
          🚀 Start your JavaScript Journey
        </h2>
        <p>
          This is just the beginning! JavaScript has countless other concepts like variables, loops, conditions, and object-oriented programming.
          Practice regularly to turn your ideas into reality on the web!
        </p>
      </div>
    `,
      link: "https://www.netacad.com/vi/courses/javascript-essentials-1",
      relatedLinks: [
        {
          title: "JavaScript Essentials 1 Course – NetAcad",
          url: "https://www.netacad.com/vi/courses/javascript-essentials-1",
        },
        {
          title: "Learn JavaScript – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        },
      ],
    },
    {
      title: "5️⃣ Variables, Data Types, and Operators in JavaScript",
      slug: "bien-va-kieu-du-lieu-javascript", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/5.jpg",
      tags: ["JavaScript", "Variables", "Basics", "DataTypes", "Operators"],
      excerpt: "Understand how to store and manage data with variables (var, let, const), basic data types, and how to perform calculations in JavaScript.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        In programming, data is at the core. To process data, we need
        <strong class="text-blue-600 dark:text-blue-400">variables</strong> to store it,
        <strong class="text-blue-600 dark:text-blue-400">data types</strong> to classify it, and
        <strong class="text-blue-600 dark:text-blue-400">operators</strong> to perform calculations.
        This article will delve into these fundamental concepts in JavaScript.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn from this article?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Distinguish and correctly use <code>var</code>, <code>let</code>, and <code>const</code> when declaring variables.</li>
        <li>Master primitive and object data types in JavaScript.</li>
        <li>Understand how arithmetic, comparison, logical, and assignment operators work.</li>
        <li>Apply this knowledge to write basic JavaScript code snippets.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🔄 Variables: Storing Data in JavaScript
      </h2>
      <p>Variables are "containers" used to store data. In JavaScript, we have three main keywords to declare variables.</p>

      <div class="space-y-6 mt-4">
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>var</code> - The old variable, function-scoped</h3>
          <p class="mt-2"><code>var</code> is the traditional way to declare variables, with a function-level scope. Nowadays, its use in new code should be limited.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
var greeting = "Hello";
function sayHi() {
    var greeting = "Hi"; // This variable only exists within the sayHi function
    console.log(greeting); // Output: "Hi"
}
sayHi();
console.log(greeting); // Output: "Hello"
          </code></pre>
        </div>
        
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>let</code> - The new variable, block-scoped</h3>
          <p class="mt-2"><code>let</code> allows you to declare variables whose values can be changed, with a scope limited to the <code>{}</code> block. It is the modern alternative to <code>var</code>.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
let count = 0;
if (true) {
    let count = 1; // This 'count' variable only exists within the if block
    console.log(count); // Output: 1
}
console.log(count); // Output: 0
          </code></pre>
        </div>

        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100"><code>const</code> - The constant, block-scoped</h3>
          <p class="mt-2"><code>const</code> is used to declare constants, whose values cannot be reassigned. It also has block scope like <code>let</code>.</p>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable.

const user = { name: "Alice" };
user.name = "Bob"; // Valid! We are changing a property, not the object itself.
console.log(user.name); // Output: "Bob"
          </code></pre>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
        <p class="font-semibold text-blue-800 dark:text-blue-300">💡 Pro Tip:</p>
        <p class="text-blue-700 dark:text-blue-400">Prefer <code>const</code> by default. If you know the variable's value needs to change, use <code>let</code>. Avoid using <code>var</code> to make your code more predictable and less error-prone.</p>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🧠 Data Types in JavaScript
      </h2>
      <p>JavaScript has flexible data types, divided into two main categories:</p>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">1. Primitive Data Types</h3>
      <p>These are the basic, immutable data types.</p>
      <ul class="list-disc ml-6 space-y-2 mt-4">
          <li><strong>Number:</strong> For integers and floating-point numbers. <code>let age = 30;</code></li>
          <li><strong>String:</strong> For text. <code>let name = "John";</code></li>
          <li><strong>Boolean:</strong> For true/false values. <code>let isActive = true;</code></li>
          <li><strong>Undefined:</strong> A variable that has been declared but not yet assigned a value.</li>
          <li><strong>Null:</strong> Represents the intentional absence of any object value.</li>
          <li><strong>Symbol:</strong> Creates unique identifiers.</li>
          <li><strong>BigInt:</strong> For extremely large integers.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">2. Object Data Type</h3>
      <p>These are more complex data structures.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Object: A collection of key-value pairs
let person = { name: "Jane", age: 25 };

// Array: A list of values
let colors = ["red", "green", "blue"];
      </code></pre>
      
      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ➕➖✖️➗ Operators in JavaScript
      </h2>
      <p>Operators are symbols used to perform operations. Here are the main groups:</p>
      <ul class="list-disc ml-6 space-y-2 mt-4">
        <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulus), <code>**</code> (exponentiation).</li>
        <li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>.</li>
        <li><strong>Comparison Operators:</strong> <code>==</code>, <code>===</code> (recommended), <code>!=</code>, <code>!==</code> (recommended), <code>></code>, <code><</code>.</li>
        <li><strong>Logical Operators:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT).</li>
      </ul>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🔗 Conclusion
      </h2>
      <p>A solid understanding of variables, data types, and operators is a strong foundation for building any complex logic in JavaScript. Take the time to practice with examples to reinforce your knowledge.</p>
    </div>
  `,
      link: "https://www.w3schools.com/js/js_variables.asp",
      relatedLinks: [
        {
          title: "JS Variables – W3Schools",
          url: "https://www.w3schools.com/js/js_variables.asp",
        },
        {
          title: "JavaScript Data Types – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
        },
        {
          title: "JavaScript Operators – W3Schools",
          url: "https://www.w3schools.com/js/js_operators.asp",
        },
      ],
    },
    {
      title: "6️⃣ Functions and Callbacks in JavaScript",
      slug: "ham-va-callback-javascript", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/6.jpg",
      tags: ["JavaScript", "Functions", "Callback", "Asynchronous"],
      excerpt: "Master the power of reusable functions and understand how Callbacks help manage the asynchronous flow in JavaScript.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        In JavaScript, <strong class="text-blue-600 dark:text-blue-400">functions</strong>
        are reusable blocks of code that perform a specific task. When combined with
        <strong class="text-blue-600 dark:text-blue-400">callbacks</strong>,
        they become an extremely powerful tool for managing asynchronous tasks and creating flexible code.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn from this article?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Understand the definition and purpose of functions in JavaScript.</li>
        <li>Know the different ways to declare and call functions.</li>
        <li>Understand the concept and usage of callback functions in real-world scenarios.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ⚙️ Types of Functions in JavaScript
      </h2>
      <p>Here are the common ways to define a function in JavaScript.</p>

      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">1. Function Declaration</h3>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
function greet(name) {
  return "Hello, " + name;
}
greet("Alice");
          </code></pre>
        </div>
        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">2. Function Expression</h3>
          <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const sayHello = function(name) {
  return "Hello, " + name;
};
sayHello("Bob");
          </code></pre>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mt-6">
        <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100">3. Arrow Function</h3>
        <p class="mt-2">Provides a shorter syntax and has a different way of handling <code>this</code>.</p>
        <pre class="bg-gray-200 dark:bg-gray-900/50 mt-4 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">
const add = (a, b) => a + b;
add(5, 3); // Output: 8
        </code></pre>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🧩 Callback: A Function Passed as an Argument
      </h2>
      <p>
        A <strong>Callback</strong> is a function that is passed into another function as an argument,
        which is then executed after some operation has been completed.
        This is the foundation of asynchronous programming in JavaScript.
      </p>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Callback Example</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
function processData(data, callback) {
  console.log("Processing: " + data);
  setTimeout(() => {
    const result = data.toUpperCase();
    callback(result);
  }, 1000);
}

function displayResult(result) {
  console.log("The result is: " + result);
}

processData("hello", displayResult);
      </code></pre>
      
      <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
        <h4 class="font-semibold text-red-800 dark:text-red-300">🚨 Warning: "Callback Hell"</h4>
        <p class="text-red-700 dark:text-red-400">When too many callbacks are nested, the code becomes hard to read and maintain. To solve this, modern JavaScript provides better solutions like <strong>Promises</strong> and <strong>Async/Await</strong>, which we will cover in the next article.</p>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🔗 Conclusion
      </h2>
      <p>Functions and Callbacks are two indispensable concepts when working with JavaScript. Mastering them will help you write more effective code and lay a solid foundation for approaching more modern asynchronous techniques.</p>
    </div>
  `,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
      relatedLinks: [
        {
          title: "Callback Functions – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
        },
        {
          title: "JavaScript Functions – W3Schools",
          url: "https://www.w3schools.com/js/js_functions.asp",
        },
        {
          title: "Arrow Functions – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
        },
      ],
    },
    {
      title: "7️⃣ Promises and Async/Await – Mastering Asynchronicity",
      slug: "promise-async-await", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/7.jpg",
      tags: ["JavaScript", "Async", "Promise", "Await", "Frontend", "Concurrency"],
      excerpt: "Level up your JavaScript skills with Promises and Async/Await, helping you handle asynchronous tasks in a clean, readable, and maintainable way.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        In the world of modern web development, asynchronous tasks are unavoidable. JavaScript provides powerful tools like
        <strong class="text-blue-600 dark:text-blue-400">Promises</strong> and
        <strong class="text-blue-600 dark:text-blue-400">Async/Await</strong>
        to manage these tasks effectively, making your code more readable and maintainable than the dreaded "Callback Hell".
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn from this article?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Understand the problem of traditional asynchronous programming (callback hell).</li>
        <li>Master the concept of a Promise, its states, and how to use it with <code>.then()</code> and <code>.catch()</code>.</li>
        <li>Learn how to write asynchronous code in a more sequential style using <code>async</code> and <code>await</code>.</li>
        <li>Apply Promises and Async/Await to real-world tasks like API calls.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ⏰ The Problem of "Callback Hell"
      </h2>
      <p>
        Initially, callback functions were the primary way to handle asynchronicity. But when callbacks are nested too deeply, they create "Callback Hell," making the code hard to read, debug, and manage.
      </p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Example of Callback Hell (avoid this!)
loadScript('script1.js', (error, script) => {
    if (error) {
        handleError(error);
    } else {
        loadScript('script2.js', (error, script) => {
            if (error) {
                handleError(error);
            } else {
                loadScript('script3.js', (error, script) => {
                    // ...and so on!
                });
            }
        });
    }
});
      </code></pre>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🤝 Promise: A Promise for the Future
      </h2>
      <p>
        A <strong>Promise</strong> is an object representing the eventual completion (or failure) of an asynchronous operation.
      </p>
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">States of a Promise</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Pending:</strong> The initial state; the operation has not completed yet.</li>
        <li><strong>Fulfilled (Resolved):</strong> The operation completed successfully.</li>
        <li><strong>Rejected:</strong> The operation failed.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">How to Use a Promise</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data loaded successfully!");
        } else {
            reject("Error: Failed to load data.");
        }
    }, 1000);
});

myPromise
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Failure:", error));
      </code></pre>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Chaining Promises</h3>
      <p>Promises allow you to chain asynchronous operations neatly.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
fetchUserData()
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id); // Return another Promise
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });
      </code></pre>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Async/Await: Modern Syntax
      </h2>
      <p>
        <strong>Async/Await</strong> is syntactic sugar built on top of Promises, allowing you to write asynchronous code that looks and behaves a lot more like synchronous code, making it much easier to read and understand.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><code><strong>async</strong></code>: Placed before a function to declare it as an asynchronous function, which will always return a Promise.</li>
        <li><code><strong>await</strong></code>: Used only inside an <code>async</code> function to pause execution until a Promise is settled.</li>
      </ul>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">Example with Async/Await</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// Assuming delayedGreet returns a Promise that resolves after a delay
async function runGreeting() {
    try {
        console.log("Starting greeting...");
        const message = await delayedGreet("Bob"); // Wait for the Promise to resolve
        console.log(message);
        console.log("Program finished.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

runGreeting();
      </code></pre>
      
      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        💡 When to Use Which?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Promises:</strong> Useful when you need to handle multiple parallel operations (<code>Promise.all</code>) or require more fine-grained control over the operation chain.</li>
        <li><strong>Async/Await:</strong> Ideal for most cases, especially when asynchronous steps need to be performed sequentially, providing the most readable code.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 dark:border-indigo-400 pl-3 mt-10">
        🔗 Conclusion
      </h2>
      <p>Promises and Async/Await are indispensable tools for any JavaScript developer. They help you manage the complexity of asynchronous tasks, resulting in cleaner and more efficient code.</p>
    </div>
  `,
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
      relatedLinks: [
        {
          title: "Async JavaScript – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
        },
        {
          title: "Promises – JavaScript.info",
          url: "https://javascript.info/promise-basics",
        },
        {
          title: "Async/await – JavaScript.info",
          url: "https://javascript.info/async-await",
        },
      ],
    },
    {
      title: "8️⃣ Java vs. JavaScript – Same Name, Different Worlds",
      slug: "java-vs-javascript", // Slug remains the same
      date: "2025-10-15",
      image: "/images/posts/8.webp",
      tags: ["Java", "JavaScript", "Comparison", "Programming", "Concepts"],
      excerpt: "Two powerful languages with similar names but completely different histories, purposes, and operating philosophies. Discover their core similarities and differences.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        <strong class="text-blue-600 dark:text-blue-400">Java</strong> and
        <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong>
        are two extremely popular programming languages. However, despite their similar names,
        they have entirely different histories, purposes, and ways of operating.
        This article will help you clearly distinguish between these two "giants."
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn from this article?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Grasp the core differences in the nature and runtime environments of Java and JavaScript.</li>
        <li>Understand the main roles and applications of each language.</li>
        <li>Distinguish the syntax and data typing features between the two languages.</li>
        <li>Get an overview to choose the right language for each project.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        ❓ Why the confusing name?
      </h2>
      <p>
        When JavaScript was created in the mid-90s, Java was already very famous. To leverage this popularity,
        Netscape decided to change the name from LiveScript to JavaScript. This name was primarily a marketing strategy,
        not because they have a deep technical connection.
      </p>
      
      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        📊 Detailed Comparison: Java vs. JavaScript
      </h2>
      <div class="overflow-x-auto my-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <table class="w-full text-left table-auto">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">Feature</th>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">Java</th>
              <th class="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">JavaScript</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Nature</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Compiled, purely Object-Oriented (OOP) language.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Interpreted, multi-paradigm (OOP, functional...) language.</td>
            </tr>
            <tr class="bg-gray-50 dark:bg-gray-800">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Runtime Environment</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Runs on the <strong>Java Virtual Machine (JVM)</strong>.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Runs in the <strong>web browser</strong> or on <strong>Node.js</strong>.</td>
            </tr>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Data Typing</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Statically-typed: types must be explicitly declared.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Dynamically-typed: types do not need to be declared.</td>
            </tr>
            <tr class="bg-gray-50 dark:bg-gray-800">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Main Applications</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Backend, Android apps, enterprise systems, Big Data.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Web frontend, Backend (Node.js), mobile apps (React Native).</td>
            </tr>
            <tr class="bg-white dark:bg-gray-900/50">
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300">Concurrency</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Built-in support for multi-threading.</td>
              <td class="border-t border-gray-200 dark:border-gray-700 px-4 py-2">Single-threaded with an asynchronous Event Loop.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Conclusion: Two Worlds, Two Strengths
      </h2>
      <p>Although they share a similar name, Java and JavaScript are two distinct languages, each with its own strengths and application domains.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>If you want to build robust backend systems, Android applications, or large-scale enterprise solutions, <strong>Java</strong> is an excellent choice.</li>
        <li>If you want to develop interactive web applications, beautiful user interfaces, or even a backend with Node.js, <strong>JavaScript</strong> is the key.</li>
      </ul>
      <p>Understanding both languages will open up many opportunities in your programming career.</p>
    </div>
  `,
      link: "https://www.geeksforgeeks.org/difference-between-java-and-javascript/",
      relatedLinks: [
        {
          title: "Java vs JavaScript – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/difference-between-java-and-javascript/",
        },
        {
          title: "Java vs JavaScript – FreeCodeCamp",
          url: "https://www.freecodecamp.org/news/java-vs-javascript/",
        },
      ],
    },
    {
      title: "9️⃣ Mini Project: Combining Java and JavaScript",
      slug: "project-java-javascript", // Slug remains the same
      date: "2025-10-16",
      image: "/images/posts/9.jpg",
      tags: ["Fullstack", "Java", "React", "Project", "API", "Frontend", "Backend"],
      excerpt: "Practice building a simple full-stack application: a backend with Java (Spring Boot REST API) and a frontend with JavaScript (ReactJS) to understand how they communicate.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        You've learned about the power of <strong class="text-blue-600 dark:text-blue-400">Java</strong> on the backend and the flexibility of <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong> on the frontend. Now it's time to combine them! This project will guide you through building a complete full-stack application where a ReactJS client communicates with a RESTful API written in Spring Boot.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 Project Goals
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Understand the Client-Server communication flow via REST API.</li>
        <li>Practice creating a simple API with Spring Boot.</li>
        <li>Build a basic user interface with ReactJS to interact with the API.</li>
        <li>Grasp the overall picture of a full-stack project.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🏗️ Application Architecture
      </h2>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500">
          <h3 class="font-semibold text-orange-600 dark:text-orange-400">☁️ Backend (Server)</h3>
          <p class="mt-2 text-sm">Java & Spring Boot provide a RESTful API to manage data.</p>
        </div>
        <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-sky-500">
          <h3 class="font-semibold text-sky-600 dark:text-sky-400">🖥️ Frontend (Client)</h3>
          <p class="mt-2 text-sm">JavaScript & ReactJS create the interface, send requests, and display data.</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        ⚙️ Step 1: Building the Backend API with Spring Boot
      </h2>
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">1. Create the Model (Task.java)</h3>
      <p>First, we define what a <code>Task</code> object will look like.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
        // TaskController.java
        import org.springframework.web.bind.annotation.*;
        import java.util.ArrayList;
        import java.util.List;
        import java.util.concurrent.atomic.AtomicLong;

        @RestController
        @RequestMapping("/api/tasks")
        @CrossOrigin(origins = "http://localhost:3000")
        public class TaskController {
            private final List<Task> tasks = new ArrayList<>();
            private final AtomicLong counter = new AtomicLong();

            public TaskController() {
                tasks.add(new Task(counter.incrementAndGet(), "Learn Java", false));
                tasks.add(new Task(counter.incrementAndGet(), "Learn JavaScript", false));
            }

            @GetMapping
            public List<Task> getAllTasks() {
                return tasks;
            }

            @PostMapping
            public Task createTask(@RequestBody Task task) {
                task.setId(counter.incrementAndGet());
                tasks.add(task);
                return task;
            }
        }
      </code></pre>

      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-8 mb-2">2. Create the Controller (TaskController.java)</h3>
      <p>Next, create the endpoints for the Frontend to call.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-java">
// TaskController.java
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    private final List<Task> tasks = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public TaskController() {
        tasks.add(new Task(counter.incrementAndGet(), "Learn Java", false));
        tasks.add(new Task(counter.incrementAndGet(), "Learn JavaScript", false));
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return tasks;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        task.setId(counter.incrementAndGet());
        tasks.add(task);
        return task;
    }
}
      </code></pre>

      <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
        <h4 class="font-semibold text-yellow-800 dark:text-yellow-300">💡 Important Note: CORS</h4>
        <p class="text-yellow-700 dark:text-yellow-400">The <code>@CrossOrigin(origins = "http://localhost:3000")</code> annotation is crucial. It acts as a "pass" allowing the React app (running on port 3000) to call your API (running on port 8080). Without it, the browser will block the request for security reasons.</p>
      </div>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ⚛️ Step 2: Displaying Frontend Code (ReactJS)
      </h2>
      <p>Here is example code for a React component to be displayed on the blog page.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-jsx">
// App.js (or a TaskList.js component)
import React, &#123; useEffect, useState &#125; from 'react';

function App() &#123;
  const [tasks, setTasks] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const API_BASE_URL = 'http://localhost:8080/api/tasks';

  useEffect(() => &#123;
    fetchTasks();
  &#125;, []);

  const fetchTasks = async () => &#123;
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    setTasks(data);
  &#125;;

  const handleAddTask = async (e) => &#123;
    e.preventDefault();
    if (!newTaskDescription.trim()) return;

    const newTask = &#123; description: newTaskDescription, completed: false &#125;;
    const response = await fetch(API_BASE_URL, &#123;
      method: 'POST',
      headers: &#123; 'Content-Type': 'application/json' &#125;,
      body: JSON.stringify(newTask),
    &#125;);
    const addedTask = await response.json();
    setTasks([...tasks, addedTask]);
    setNewTaskDescription('');
  &#125;;

  return (
    &lt;div style=&#123;&#123; maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' &#125;&#125;&gt;
      &lt;h1 style=&#123;&#123; textAlign: 'center', marginBottom: '20px' &#125;&#125;&gt;Task Manager&lt;/h1&gt;
      &lt;form onSubmit=&#123;handleAddTask&#125; style=&#123;&#123; display: 'flex', marginBottom: '20px' &#125;&#125;&gt;
        &lt;input
          type="text"
          value=&#123;newTaskDescription&#125;
          onChange=&#123;(e) => setNewTaskDescription(e.target.value)&#125;
          placeholder="Add a new task..."
          style=&#123;&#123; flexGrow: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' &#125;&#125;
        /&gt;
        &lt;button type="submit" style=&#123;&#123; padding: '10px 15px', marginLeft: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' &#125;&#125;&gt;
          Add
        &lt;/button&gt;
      &lt;/form&gt;
      &lt;ul style=&#123;&#123; listStyle: 'none', padding: 0 &#125;&#125;&gt;
        &#123;tasks.map(task => (
          &lt;li key=&#123;task.id&#125; style=&#123;&#123; padding: '10px 0', borderBottom: '1px solid #eee' &#125;&#125;&gt;
            &#123;task.description&#125; - &#123;task.completed ? 'Completed' : 'Pending'&#125;
          &lt;/li&gt;
        ))&#125;
      &lt;/ul&gt;
    &lt;/div&gt;
  );
&#125;
export default App;
      </code></pre>


      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🖼️ Final Result (Illustration)
      </h2>
      <p>Below is an illustration of the result of the above code when run in a real React project.</p>
      <div class="mt-4 p-4 border rounded-lg bg-white dark:bg-gray-800">
        <img 
          src="/images/posts/9-result.jpg" 
          alt="Task Manager Application Result" 
          class="rounded-md shadow-lg w-full"
        >
      </div>
      
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 dark:border-indigo-400 pl-3 mt-10">
        🔗 Summary and Next Steps
      </h2>
      <p>This project is an excellent example of how Java and JavaScript can work together. To enhance it, you could add <strong>Update</strong> (PUT) and <strong>Delete</strong> (DELETE) functionality, connect to a database, and improve the user interface.</p>
    </div>
  `,
      link: "https://spring.io/guides/gs/rest-service/",
      relatedLinks: [
        {
          title: "Spring Boot REST Service – Spring.io",
          url: "https://spring.io/guides/gs/rest-service/",
        },
        {
          title: "React Hooks – Official Docs",
          url: "https://react.dev/reference/react",
        },
        {
          title: "Fetch API – MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
        },
      ],
    },
    // =================================================================
    // =============== 🇺🇸 ENGLISH BLOG POSTS (Continued) ===============
    // =================================================================
    {
      title: "🔟 JavaScript OOP: Prototypes and Classes",
      slug: "javascript-essentials-2-oop", // Slug remains the same
      date: "2025-10-16",
      image: "/images/posts/10.jpg",
      tags: ["JavaScript", "OOP", "Prototype", "JSE2", "ES6"],
      excerpt: "Dive deep into the nature of JavaScript's OOP: from the unique prototype mechanism to the modern `class` syntax of ES6, helping you build structured and reusable code.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Unlike traditional object-oriented languages like Java, <strong class="text-blue-600 dark:text-blue-400">JavaScript</strong> has a unique approach to OOP through its <strong class="text-blue-600 dark:text-blue-400">prototype</strong> mechanism. This article will help you understand this foundation and how the modern <code>class</code> syntax of ES6 is just a more convenient "syntactic sugar" on top of it.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Understand the core difference between class-based and prototype-based OOP.</li>
        <li>Master the concept of the prototype chain and how it works.</li>
        <li>Practice creating objects in both ways: using Constructor Functions (traditional) and using <code>class</code> (modern).</li>
        <li>Recognize why understanding prototypes is important even when you only use <code>class</code>.</li>
      </ul>

      <div class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 class="font-semibold text-gray-900 dark:text-gray-100">OOP in JavaScript: The Core Difference</h3>
        <p class="mt-2 text-sm">
          Instead of using a "blueprint" (class) to create objects, every object in JavaScript has a hidden link to another object, called its <strong>prototype</strong>. When a property is not found on an object, JavaScript automatically looks it up on the prototype chain. This is how JavaScript implements inheritance.
        </p>
      </div>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🏛️ Method 1: Using Constructor Functions & Prototypes (Traditional)
      </h2>
      <p>Before ES6, this was the primary way to create objects with similar structures.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
// 1. Define a Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 2. Add methods to the prototype to be shared
Car.prototype.getSummary = function() {
    return \`A \${this.brand} \${this.model}, manufactured in \${this.year}.\`;
};

// 3. Create instances
const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.getSummary()); // "A Toyota Camry, manufactured in 2020."
      </code></pre>
      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        ✨ Method 2: Using the <code>class</code> syntax (Modern)
      </h2>
      <p>ES6 introduced the <code>class</code> keyword to make OOP syntax more familiar and readable. However, it still operates on the prototype mechanism underneath.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto"><code class="language-javascript">
class Animal {
    // constructor is a special method for creating and initializing an object
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} makes a sound.\`);
    }
}

// Use "extends" for inheritance
class Dog extends Animal {
    speak() { // Overriding parent class method (Overriding)
        console.log(\`\${this.name} barks: Woof woof!\`);
    }
}

const myDog = new Dog('Buddy');
myDog.speak(); // "Buddy barks: Woof woof!"
</code></pre>
      
      <div class="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r-lg">
        <h4 class="font-semibold text-indigo-800 dark:text-indigo-300">💡 Key Takeaway</h4>
        <p class="text-indigo-700 dark:text-indigo-400">The <code>class</code> syntax is just "syntactic sugar" - a cleaner way to write code that uses the prototype mechanism. Understanding prototypes helps you debug effectively and master the nature of JavaScript.</p>
      </div>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🚀 Conclusion
      </h2>
      <p>Mastering OOP in JavaScript, regardless of the approach, will help you build complex applications with a clear, reusable, and scalable structure.</p>
    </div>
  `,
      link: "https://www.netacad.com/courses/programming/javascript-essentials-2",
      relatedLinks: [
        {
          title: "Inheritance and the prototype chain - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
        },
        {
          title: "JavaScript Classes - W3Schools",
          url: "https://www.w3schools.com/js/js_classes.asp",
        },
        {
          title: "Classes - JavaScript.info",
          url: "https://javascript.info/class",
        },
      ],
    },
    {
      title: "🌐 Networking Basics – The Process of Sending Data Over a Network",
      slug: "networking-basics-osi-tcp-ip", // Slug remains the same
      date: "2025-10-16",
      image: "/images/posts/11.png",
      tags: ["Networking", "OSI", "TCP/IP", "Basics", "Infrastructure"],
      excerpt: "Explore the two most fundamental computer networking models: the 7-layer OSI and TCP/IP. This is core knowledge for any developer to understand how data moves across the Internet.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Have you ever wondered what really happens when you type a web address and hit Enter? Data doesn't just magically "fly" across the Internet. It follows a strict packaging and transportation process, much like sending a parcel.
      </p>
      <p>
        Imagine this: you write a letter (data), put it in an envelope (packaging), write the address (add information), and send it to the post office (transmission). Computer networks work similarly through a process called <strong>encapsulation</strong>. The two most famous models describing this process are OSI and TCP/IP.
      </p>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🏛️ The OSI Model: A Detailed 7-Layer "Blueprint"
      </h2>
      <p>The OSI model is a theoretical blueprint that divides the network communication process into 7 specific steps (layers). It helps us understand the role of each component.</p>
      <img src="/images/posts/1111.1.jpg" alt="Data encapsulation process through the OSI model" class="my-4 w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-6 mb-2">Data Sending Process (Encapsulation)</h3>
      <div class="space-y-3">
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 7 (Application):</strong> Where you create the data. <strong>Example:</strong> Composing an email, typing a URL in the browser.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 6 (Presentation):</strong> Data is formatted, encrypted (SSL/TLS). <strong>Example:</strong> Converting text to ASCII code.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 5 (Session):</strong> Opens and maintains a stable connection "session".</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 4 (Transport):</strong> Data is broken down into <strong>Segments</strong>. The TCP protocol adds sequence numbers for reliability.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 3 (Network):</strong> Segments are appended with IP addresses, becoming <strong>Packets</strong>. Routers use this information to find the path.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 2 (Data Link):</strong> Packets are appended with MAC addresses, becoming <strong>Frames</strong> for movement within the local network.</div>
        <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><strong>Layer 1 (Physical):</strong> Frames are converted into electrical signals/waves (<strong>Bits</strong>) and transmitted over cables or Wi-Fi.</div>
      </div>
      <p class="mt-4">When the server receives the data, it performs the reverse process (unwrapping from layer 1 → 7) to retrieve the original data.</p>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🌐 The TCP/IP Model: A Practical 4-Layer Model
      </h2>
      <p>TCP/IP is the model used in practice and is the foundation of the Internet. It consolidates the 7 layers of the OSI model into 4 simpler layers.</p>
      <img src="/images/posts/11.2.jpg" alt="The 4-layer TCP/IP Model" class="my-4 w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div class="space-y-3">
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Application (OSI Layers 7, 6, 5):</strong> Handles user protocols like HTTPS, TLS, DNS.</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Transport (OSI Layer 4):</strong> Provides end-to-end data transport using TCP or UDP.</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Internet (OSI Layer 3):</strong> Routes packets using IP addresses (IPv4, IPv6).</div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"><strong>Network Access (OSI Layers 2, 1):</strong> Transmits data over physical hardware like Ethernet, Wi-Fi.</div>
      </div>
      
      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Real-world Example: Accessing a Website
      </h2>
      <ol class="list-decimal ml-6 space-y-2">
        <li><strong>You (Application):</strong> Type <code>google.com</code>. The browser creates an HTTP "GET /" request.</li>
        <li><strong>Packaging (Transport):</strong> The request is broken down, put into TCP Segments, and tagged with destination port 443 (HTTPS).</li>
        <li><strong>Addressing (Internet):</strong> Each Segment is put into an IP Packet, tagged with Google's server IP address.</li>
        <li><strong>Local Delivery (Network Access):</strong> The Packet is put into a Frame, tagged with your home router's MAC address.</li>
        <li><strong>Transmission (Physical):</strong> The Frame is converted into electrical signals and sent to the router.</li>
        <li><strong>The Journey:</strong> Your router reads the IP address and pushes the Packet onto the Internet, where it hops across many other routers to reach Google's server.</li>
        <li><strong>Response:</strong> Google's server does the reverse process to read the request, then encapsulates the website content and sends it back to you following the same process.</li>
      </ol>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        💡 Why Do Developers Need to Know This?
      </h2>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li><strong>More Effective Debugging:</strong> When an API isn't working, you can deduce where the problem might be (DNS error? TCP connection issue? Or an application layer bug?).</li>
        <li><strong>Better System Design:</strong> Understanding data transmission helps in optimizing performance and security.</li>
        <li><strong>Better Communication:</strong> Easily converse with network engineers or DevOps professionals.</li>
      </ul>
    </div>
  `,
      link: "https://www.netacad.com/courses/networking/networking-basics",
      relatedLinks: [
        {
          title: "What is OSI Model? - Layers of OSI Model",
          url: "https://www.geeksforgeeks.org/computer-networks/open-systems-interconnection-model-osi/",
        },
        {
          title: "TCP/IP Model - GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/tcp-ip-model/",
        },
      ],
    },
    {
      title: "1️⃣2️⃣ JavaScript: Professional Error Handling with try...catch",
      slug: "javascript-error-handling", // Slug remains the same
      date: "2025-10-16",
      image: "/images/posts/12.jpg",
      tags: ["JavaScript", "Error Handling", "JSE2", "Exception", "try-catch"],
      excerpt: "How do you prevent your program from crashing when an error occurs? Learn to use `try...catch...finally` to catch and handle exceptions professionally, making your application more robust and user-friendly.",
      content: `
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p class="text-lg font-medium">
        Errors are an unavoidable part of programming. Instead of letting an unexpected error crash your entire application, JavaScript provides a powerful mechanism to manage them: the <strong class="text-blue-600 dark:text-blue-400">try...catch...finally</strong> block. This article will help you write safer and more reliable code.
      </p>

      <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-l-4 border-blue-500 dark:border-blue-400 pl-3 mt-8">
        📘 What will you learn?
      </h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Understand why error handling is important.</li>
        <li>Master the syntax and operation of the <code>try...catch...finally</code> block.</li>
        <li>Know how to use the <code>Error</code> object to get detailed error information.</li>
        <li>Learn how to proactively "throw" errors using the <code>throw</code> keyword to control program flow.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 border-l-4 border-purple-500 dark:border-purple-400 pl-3 mt-10">
        🚧 Why Handle Errors?
      </h2>
      <p>If an error occurs and is not handled, the program will stop abruptly, creating a poor user experience. Error handling helps you:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Prevent crashes:</strong> Keep the application running.</li>
        <li><strong>Provide friendly feedback:</strong> Display clear error messages to the user.</li>
        <li><strong>Easier debugging:</strong> Log detailed error information for fixes.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-green-600 dark:text-green-400 border-l-4 border-green-500 dark:border-green-400 pl-3 mt-10">
        🔧 The 'try...catch...finally' Syntax
      </h2>
      <p>This mechanism consists of three blocks:</p>
      <div class="mt-4 space-y-3">
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>try</strong></code>: Contains the code block that you anticipate might throw an error.</div>
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>catch (error)</strong></code>: If an error occurs in the <code>try</code> block, the program jumps here. The <code>error</code> variable contains information about the error.</div>
          <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"><code><strong>finally</strong></code> (optional): This block <strong>always</strong> executes, regardless of whether an error occurred. It's often used for resource cleanup.</div>
      </div>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto mt-4"><code class="language-javascript">
try {

  console.log("Starting the try block...");
// Simulate an error
  someUndefinedFunction();
  console.log("This line will not be executed.");
} catch (error) {
  // If an error occurs, the execution flow jumps here
  console.error("An error occurred!");
  console.error("Error message:", error.message); // Example: "someUndefinedFunction is not defined"
} finally {
  // This block always executes
  console.log("The finally block has been executed.");
}
console.log("The program continues to run.");
</code></pre>

      <h2 class="text-2xl font-semibold text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400 pl-3 mt-10">
        🚀 Proactively Throwing Errors with 'throw'
      </h2>
      <p>Sometimes, you want to create your own errors when an unexpected condition occurs (e.g., invalid input data). You can do this with the <code>throw</code> keyword.</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner overflow-x-auto mt-4"><code class="language-javascript">
function parseUser(jsonString) {
  try {
    let user = JSON.parse(jsonString);
    if (!user.name || !user.age) {
      // Proactively throw an error if the data is invalid
      throw new Error("User data is incomplete: missing name or age.");
    }
    console.log(\`User: \${user.name}, Age: \${user.age}\`);
    return user;
  } catch (error) {
    console.error("Data processing error: ", error.message);
    return null; // Return null or take other actions
  }
}

parseUser('{"name": "Alice"}'); // Output: Data processing error: User data is incomplete: missing name or age.
      </code></pre>

      <h2 class="text-2xl font-semibold text-rose-600 dark:text-rose-400 border-l-4 border-rose-500 dark:border-rose-400 pl-3 mt-10">
        🔗 Conclusion
      </h2>
      <p>Error handling is an essential skill for a professional developer. Fluency in using <code>try...catch</code> and <code>throw</code> not only makes your applications more stable but also significantly improves the user experience.</p>
    </div>
  `,
      link: "https://www.netacad.com/courses/programming/javascript-essentials-2",
      relatedLinks: [
        {
          title: "try...catch - MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
        },
        {
          title: "JavaScript Errors - W3Schools",
          url: "https://www.w3schools.com/js/js_errors.asp",
        },
        {
          title: "Error handling, 'try...catch' - JavaScript.info",
          url: "https://javascript.info/try-catch",
        },
      ],
    },
  ],
}
