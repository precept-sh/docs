+++
date = '2024-10-23T10:20:56-04:00'
title = 'Precept'
+++

{{< modal id="intro" title="Precept is in Preview mode" >}}
Although Precept has been in enterprise production environments for a few years, we are getting ready to release it to the general public. This site is a work in progress as we prepare for the official release.

For the history of Precept see [about](/bout). For more information contact us at [info@precept.sh](mailto:info@precept.sh?subject=learn+more).
{{< /modal >}}

{{< blocks/cover title="Introducing Precept" image_anchor="top" height="full" >}}

One unified interface for all your API integrations.

Stop juggling multiple API implementations. Start building with a single, consistent interface.
{ .mb-5 }

{{< button color="primary" href="/docs/get-started" icon="fa-solid fa-arrow-alt-circle-right">}}
Get Started
{{</ button >}}

{{< blocks/level-down color="info" >}}

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
With support for Intelligent caching, API calls can be reduced, improving performance and helping keep within rate limits.
{{% /blocks/feature %}}

{{< quote class="col-lg-6" author="Tom O'Reilly" source="LinkedIn" href="https://www.linkedin.com/posts/tworeilly_how-long-does-an-api-integration-take-activity-7255212477418729472-6zk-" >}}
Enabling features that would take months to build in-house has always been the promise of third-party integrations. But often the integration takes just as long, distracting your team from doing what you really need them to do.
{{< /quote >}}

<div class="col-lg-6 py-2 px-6">
{{< figure src="/images/animated2.svg" caption="<center><em>Leave the integration work to Precept. You've got more important things to do.</em></center>" >}}
</div>

{{% /blocks/section %}}

{{% blocks/section type="row" %}}

## Runs Within Your Environment

Unlike SaaS alternatives, Precept runs entirely within your own infrastructure, giving you complete control over your data and integrations.

{{% blocks/feature icon="fa-solid fa-shield-halved" title="Data Privacy" %}}
Sensitive data never leaves your infrastructure. Perfect for healthcare, financial, and enterprise applications.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-piggy-bank" title="Cost Control" %}}
No per-request pricing or unexpected bills. Deploy once and handle unlimited API calls within your infrastructure.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-solid fa-lock" title="Custom Security" %}}
Integrate with your existing security infrastructure, VPCs, and compliance tools.
{{% /blocks/feature %}}

| Feature             | Precept                                            | SaaS Alternatives                           |
| :------------------ | :------------------------------------------------- | :------------------------------------------ |
| **Data Privacy**    | :heavy_check_mark: Complete control over data flow | :x: Data passes through third-party servers |
| **Pricing**         | :heavy_check_mark: One-time licensing cost         | :x: Per-request pricing                     |
| **Deployment**      | :heavy_check_mark: Your infrastructure             | :x: Vendor infrastructure                   |
| **Customization**   | :heavy_check_mark: Full access to source code      | :x: Limited to vendor features              |
| **Network Control** | :heavy_check_mark: Behind your firewall            | :x: External service                        |

{ .w-auto .mx-auto }

{{% /blocks/section %}}

{{% blocks/section type="row" %}}

## Integration Marketplace

**Precept is extensible.** Integrations provide the authentication, schemas, resolvers, and transformations required to merge third party API features seemlessly into the Precept ecosystem.

{{< watermark text="sample" >}}
{{< cardpane >}}

{{% integration
        channel-icon="fa-regular fa-credit-card"
        name="Stripe"
        by="Precept Team"
        version="v2.1.0"
        stars="4.9"
        installs="10k"
        tags="Verified,Payment" %}}
Complete Stripe API integration with support for payments, subscriptions, and webhooks.
{{% /integration %}}

{{% integration
        channel-icon="fa-solid fa-envelope"
        name="SendGrid"
        by="Proof Partners"
        version="v1.3.2"
        stars="4.8"
        installs="5k"
        tags="Official,Email" %}}
Official SendGrid integration with email templates, analytics, and delivery tracking.
{{% /integration %}}

{{% integration
        channel-icon="fa-solid fa-lock"
        name="Auth0"
        by="Community"
        version="v1.0.0"
        stars="4.7"
        installs="2k"
        tags="Auth,Popular" %}}
Seamless authentication and user management with Auth0's powerful platform.
{{% /integration %}}

{{% integration
        channel-icon="fa-solid fa-box"
        name="S3"
        by="AWS"
        version="v2.0.1"
        stars="4.9"
        installs="8k"
        tags="Official,Storage,New" %}}
Official AWS S3 integration with support for all S3 operations and event handling.
{{% /integration %}}

{{< /cardpane >}}
{{< /watermark >}}

{{< button color="primary" href="/marketplace" icon="fa-solid fa-arrow-alt-circle-right" >}}
See all available Integrations
{{< /button >}}

Don't see the integration you need, or want to integrate your private API for an even better experience? Create your own plugin using the <a class="icon-link" href="/docs/integrations/sdk" ><i class="fa-solid fa-pen-nib"></i>Integration SDK</a>. Or use <a class="icon-link" href="/docs/integrations/ai"><i class="fa-solid fa-robot"></i>Precept AI (Coming soon)</a> to instantly build a working integration for any existing API.

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
