+++
date = '2024-10-23T10:20:56-04:00'
title = 'Precept'
+++

{{< blocks/cover title="Introducing Precept" image_anchor="top" height="full" >}}

One unified interface for all your API integrations

Stop juggling multiple API implementations. Start building with a single, consistent interface.
{ .mb-5 }

{{< button color="primary" href="/docs/get-started" icon="fa-solid fa-arrow-alt-circle-right">}}
  Get Started
{{</ button >}}

{{< blocks/link-down color="info" >}}
{{< /blocks/cover >}}

{{% blocks/lead color="primary" %}}
<!-- ## Why Precept? -->

Managing multiple third-party API integrations is complex, time-consuming, and error-prone.

Precept provides a single, unified interface that handles all the complexity of API integration for you.

{{% /blocks/lead %}}

{{% blocks/section color="dark" type="row" %}}

{{% blocks/feature icon="fa-solid fa-door-open" title="Unified Interface" url="/docs/how-it-works" %}}
One consistent API to rule them all. No more dealing with different authentication methods, request formats, or response structures.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-network-wired" title="Modular Design" url="#marketplace" %}}
An ever growing marketplace of enterprise and community-built integrations makes finding your third party provider a breeze.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-hard-drive" title="Smart Caching" url="/docs/cache" %}}
With support for Intelligent caching, API calls can be reduced, improving performance, and helping keep within rate limits.
{{% /blocks/feature %}}

{{< quote class="col-6" author="Tom O'Reilly" source="LinkedIn" href="https://www.linkedin.com/posts/tworeilly_how-long-does-an-api-integration-take-activity-7255212477418729472-6zk-" >}}
Enabling features that would take months to build in-house has always been the promise of third-party integrations. But often the integration takes just as long, distracting your team from doing what you really need them to do.
{{< /quote >}}

<div class="col-6 py-2 px-6">
{{< figure src="/animated.svg" caption="<em>Leave the integration work to Precept. You've got more important things to do.</em>" >}}
</div>

{{% /blocks/section %}}

{{% blocks/section type="row" %}}

## Runs Within Your Environment

Unlike SaaS alternatives, Precept runs entirely within your own infrastructure, giving you complete control over your data and integrations.

{{% blocks/feature icon="fa-solid fa-shield-halved" title="Data Privacy" %}}
Sensitive data never leaves your infrastructure. Perfect for healthcare, financial, and enterprise applications.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-piggy-bank" title="Cost Control"
    url="https://github.com/google/docsy-example" %}}
No per-request pricing or unexpected bills. Deploy once and handle unlimited API calls within your infrastructure.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-lock" title="Custom Security"
    url="https://twitter.com/GoHugoIO" %}}
Integrate with your existing security infrastructure, VPCs, and compliance tools.
{{% /blocks/feature %}}

| Feature             | Precept                                               | SaaS Alternatives                              |
|:--------------------|:------------------------------------------------------|:-----------------------------------------------|
| **Data Privacy**    | :heavy_check_mark: Complete control over data flow | :x: Data passes through third-party servers |
| **Pricing**         | :heavy_check_mark: One-time licensing cost         | :x: Per-request pricing                     |
| **Deployment**      | :heavy_check_mark: Your infrastructure             | :x: Vendor infrastructure                   |
| **Customization**   | :heavy_check_mark: Full access to source code      | :x: Limited to vendor features              |
| **Network Control** | :heavy_check_mark: Behind your firewall            | :x: External service                        |
{ .w-auto .mx-auto }

{{% /blocks/section %}}

{{% blocks/section type="row" %}}

## Datapacks Marketplace

Precept can be extended with a plugin-style extension known as a Datapack. Datapacks provide the authentication, schemas, resolvers, and transformations required to integrate third party APIs into the Precept ecosystem.

{{< cardpane >}}

{{% datapack
        channel-icon="fa-regular fa-credit-card"
        name="Stripe"
        by="Precept Team"
        version="v2.1.0"
        stars="4.9"
        installs="10k"
        tags="Verified,Payment" %}}
Complete Stripe API integration with support for payments, subscriptions, and webhooks.
{{% /datapack %}}

{{% datapack
        channel-icon="fa-solid fa-envelope"
        name="SendGrid"
        by="Proof Partners"
        version="v1.3.2"
        stars="4.8"
        installs="5k"
        tags="Official,Email" %}}
Official SendGrid integration with email templates, analytics, and delivery tracking.
{{% /datapack %}}

{{% datapack
        channel-icon="fa-solid fa-lock"
        name="Auth0"
        by="Community"
        version="v1.0.0"
        stars="4.7"
        installs="2k"
        tags="Auth,Popular" %}}
Seamless authentication and user management with Auth0's powerful platform.
{{% /datapack %}}

{{% datapack
        channel-icon="fa-solid fa-box"
        name="S3"
        by="AWS"
        version="v2.0.1"
        stars="4.9"
        installs="8k"
        tags="Official,Storage,New" %}}
Complete Stripe API integration with support for payments, subscriptions, and webhooks.
{{% /datapack %}}

{{< /cardpane >}}

{{< button color="info" href="/marketplace" icon="fa-solid fa-arrow-alt-circle-right" >}}
  See all available Integrations
{{< /button >}}

Or create your own plugin using the [Datapack Development Guide](/docs/sdk)

{{% /blocks/section %}}

{{% blocks/section type="col" %}}

## Ready to Take Control?

<div class="text-center py-4">
Start integrating your services with Precept today.
</div>
<div class="text-center">
{{< button color="primary" href="/docs/get-started" icon="fa-solid fa-arrow-alt-circle-right">}}
  Get Started
{{< /button >}}
</div>
{{% /blocks/section %}}
