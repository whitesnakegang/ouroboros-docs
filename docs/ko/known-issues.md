# 알려진 버그

Ouroboros 사용 시 주의해야 할 알려진 이슈와 해결 방법을 정리합니다.

## Swagger UI와의 충돌

### 문제

Swagger UI (springdoc-openapi)가 프로젝트에 설치되어 있으면 Ouroboros와 충돌이 발생할 수 있습니다.

### 증상

- 애플리케이션 시작 시 에러 발생
- OpenAPI 스키마 파싱 오류
- 웹 UI 접속 불가

### 원인

Swagger UI와 Ouroboros가 모두 OpenAPI 스키마를 처리하려고 할 때 경로 충돌이나 빈 설정 충돌이 발생합니다. 특히 springdoc-openapi-starter-webmvc-ui 버전이 2.8.13 미만 (예: 2.2.0)인 경우 호환성 문제가 발생합니다.

### 해결 방법

springdoc-openapi-starter-webmvc-ui를 2.8.13 이상으로 업그레이드하세요.

#### Gradle

```gradle
dependencies {
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.13'
}
```

#### Maven

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.8.13</version>
</dependency>
```

> **참고**: Ouroboros는 자체 웹 UI를 제공하므로 Swagger UI와 함께 사용할 필요가 없습니다. Ouroboros의 웹 UI에서 API 명세를 관리하고 Mock 서버를 사용할 수 있습니다.

## Spring Boot 4.0.0 미지원

### 문제

Ouroboros는 현재 Spring Boot 4.0.0에서 작동하지 않습니다.

### 지원 버전

Ouroboros는 **Spring Boot 3.5.7 이하 버전**만 지원합니다.

### 원인

Spring Boot 4.0.0에서 패키지 경로가 변경되어 Ouroboros가 기존 경로를 참조하는 부분에서 호환성 문제가 발생합니다.

### 해결 방법

Spring Boot 버전을 3.5.7 이하로 다운그레이드하거나, Spring Boot 4.0.0 지원이 추가될 때까지 기다려주세요.

#### Gradle

```gradle
ext {
    set('springBootVersion', '3.5.7')
}
```

#### Maven

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.7</version>
    <relativePath/>
</parent>
```

## Lombok 설정 누락

### 문제

@ApiState 어노테이션을 사용했지만 자동 검증이 동작하지 않습니다.

### 원인

Lombok을 사용하는 프로젝트에서 `annotationProcessor 'org.projectlombok:lombok'` 설정이 누락된 경우, @ApiState 메타데이터가 생성되지 않아 자동 스캔이 이루어지지 않습니다.

### 해결 방법

빌드 설정에 Lombok annotation processor를 추가하세요.

#### Gradle

```gradle
dependencies {
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'  // 필수!
}
```

#### Maven

```xml
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>${lombok.version}</version>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```

## Springwolf 설정 누락

### 문제

애플리케이션이 부팅되지 않거나 시작 시 에러가 발생합니다.

### 원인

REST API만 사용하는 경우에도 `springwolf.enabled=false` 설정이 없으면 Springwolf가 자동으로 활성화되어 충돌이 발생할 수 있습니다.

### 해결 방법

REST API만 사용하거나 WebSocket 코드 스캔이 필요 없는 경우, 반드시 다음 설정을 추가하세요.

#### application.yml

```yaml
springwolf:
  enabled: false  # 필수!
```

#### application.properties

```properties
springwolf.enabled=false  # 필수!
```

> ⚠️ **중요**: 이 설정은 REST API만 사용하는 경우에도 필수입니다. 이 설정이 없으면 애플리케이션이 정상적으로 부팅되지 않을 수 있습니다.

## 버그 리포트

다른 버그를 발견하셨거나 개선 사항이 있으시면 GitHub Issues에 리포트해 주세요.

[GitHub Issues 열기](https://github.com/whitesnakegang/ouroboros/issues)

### 버그 리포트 작성 시 포함할 내용

1. **환경 정보**
   - Java 버전
   - Spring Boot 버전
   - Ouroboros 버전
   - 빌드 도구 (Gradle/Maven)

2. **문제 설명**
   - 발생한 문제
   - 재현 방법
   - 예상 동작
   - 실제 동작

3. **에러 로그**
   - 스택 트레이스
   - 관련 로그

4. **설정 파일**
   - application.yml 또는 application.properties
   - build.gradle 또는 pom.xml (관련 부분)

## 다음 단계

- [Quick Start](./quick-start.md) - 올바른 설정으로 시작하기
- [Contributing](./contributing.md) - 버그 수정에 기여하기
